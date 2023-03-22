import React from 'react'
import { Col,Card } from 'react-bootstrap'
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
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>Price : {props.data.price} Quantity : {props.data.quantity}</Card.Footer>
          </Card>
      </Col>
    </>
  )
}
export default Item;
