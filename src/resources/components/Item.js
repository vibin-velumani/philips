import React from 'react'
import { Col,Card, Button } from 'react-bootstrap'
import saws from '../images/saws.jpg';
function Item (props) {
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
             
             <Button variant='success' style={{float:"left"}}>Add to Cart</Button>
             <Button variant='success' style={{float:"right"}}>Order Now</Button>
            </Card.Body>
          </Card>
      </Col>
    </>
  )
}
export default Item;