import { async } from 'q';
import React from 'react'
import { Col,Card, Button } from 'react-bootstrap'
import axios from '../../Api/axios';
import { useAuth } from '../../Authentication';
import saws from '../images/saws.jpg';
function Item (props) {
  const id=JSON.parse(useAuth().user)._id;
  async function addtocart(i){
   await axios.post('auth/addcart',{id:id,item:{productname:i.name,productId:i._id,price:i.price}}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
  }
  console.log(props.data.preimg);
  return (
    <>
     <Col>
          <Card>
            <Card.Img variant="top" src={props.data.preimg} alt="..."/> 
            <Card.Body>
              <Card.Title>{props.data.name}</Card.Title>
              <Card.Text>
                {props.data.desc}
              </Card.Text>
             <span style={{float:"left"}}> ₹{props.data.price} </span>  <span style={{float:"right"}}>Stocks Left : {props.data.quantity}</span>
             <br/><br/>
             
             <Button variant='success' style={{float:"left"}} onClick={()=>addtocart(props.data)}>Add to Cart</Button>
             <Button variant='success' style={{float:"right"}}>Order Now</Button>
            </Card.Body>
          </Card>
      </Col>
    </>
  )
}
export default Item;