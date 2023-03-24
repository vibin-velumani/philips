import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap';
import Product from './Product';
export default function Home(props) {
  return (
    <>
    <Container>
       <Row>
          <h3>Offers</h3>
       </Row>
       
       <h3>Products</h3>
       <Row>
  <Col xs={12} md={3} sm={6}>
    <Product imageUrl="https://via.placeholder.com/286x180.png?text=Smartphones" />
  </Col>
  <Col xs={12} md={3} sm={6}>
    <Product imageUrl="https://via.placeholder.com/286x180.png?text=Smartphones" />
  </Col>
  <Col xs={12} md={3} sm={6}>
    <Product imageUrl="https://via.placeholder.com/286x180.png?text=Smartphones" />
  </Col>
  <Col xs={12} md={3} sm={6}>
    <Product imageUrl="https://via.placeholder.com/286x180.png?text=Smartphones" />
  </Col>
</Row>
       
    </Container>
    
    </>
  )
}
