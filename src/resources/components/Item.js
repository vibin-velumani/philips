import React from 'react'
import { Col,Card } from 'react-bootstrap'
import saws from '../images/saws.jpg';
function Item (props) {
  return (
    <>
     <Col>
          <Card>
            <Card.Img variant="top" src={saws} alt="..."/> 
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                details need to be added.
              </Card.Text>
            </Card.Body>
          </Card>
      </Col>
    </>
  )
}
export default Item;
