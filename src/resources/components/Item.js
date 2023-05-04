import { async } from 'q';
import React from 'react'
import { Col,Card, Button } from 'react-bootstrap'
import axios from '../../Api/axios';
import { useAuth } from '../../Authentication';
import saws from '../images/saws.jpg';
import { useNavigate } from 'react-router-dom';
function Item (props) {
  const navigate=useNavigate();
  const id=JSON.parse(useAuth().user)._id;
  console.log(id)
  async function addtocart(i){
   await axios.post('auth/addcart',{id:id,item:{productname:i.name,productId:i._id,price:i.price,preimg:i.preimg,category:i.category}}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
  }
  async function ordernow(i){
    await axios.post('auth/addcart',{id:id,item:{productname:i.name,productId:i._id,price:i.price,preimg:i.preimg,category:i.category}}).then((res)=>{navigate('/cart')}).catch((err)=>{console.log(err);navigate('/cart')})
   }
  return (
    <>
     <Col>
          <Card>
            <Card.Img variant="top" src={props.data.preimg} alt="..." onClick={()=>navigate(`/singleproduct?product=${props.data._id}`)}/> 
            <Card.Body>
              <Card.Title>{props.data.name}</Card.Title>
              <Card.Text>
                {props.data.desc}
              </Card.Text>
             <span style={{float:"left"}}> {props.data.offer?<><span className="red-p">₹{props.data.price-props.data.price*(props.data.offerper/100)}</span> &nbsp; <strike>₹{props.data.price}</strike></>:<p>₹{props.data.price}</p>
} </span>  <span style={{float:"right"}}>Stocks Left : {props.data.quantity}</span>
             <br/><br/>
             
             <Button variant='success' style={{float:"left"}} onClick={()=>addtocart(props.data)}>Add to Cart</Button>
             <Button variant='success' style={{float:"right"}} onClick={()=>ordernow(props.data)}>Order Now</Button>
            </Card.Body>
          </Card>
      </Col>
    </>
  )
}
export default Item;