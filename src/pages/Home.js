import React from 'react'
import { Container, Row ,Col, Carousel} from 'react-bootstrap';
import Product from './Product';
export default function Home(props) {
  return (
    <>
    <Container>
      
<br/>
       <Row>
          <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_960_720.jpg"
                alt="First slide"
                height={800}
                width={400}
              />
              <Carousel.Caption>
                <h3>Special Offer 1</h3>
                <p>Save 20% on selected products</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2018/05/16/18/08/e-commerce-3406613_960_720.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Special Offer 2</h3>
                <p>Free shipping on orders over ₹5000</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Special Offer 3</h3>
                <p>Buy one, get one free on selected items</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
       </Row>
       
       <h3>Products</h3>
       <Row>
  <Col xs={12} md={3} sm={6}>
    <Product imageUrl="https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FkZ2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
  </Col>
  <Col xs={12} md={3} sm={6}>
    <Product imageUrl="  https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=600" />
  </Col>
  <Col xs={12} md={3} sm={6}>
    <Product imageUrl="https://images.unsplash.com/photo-1603946877690-d410437c29aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
  </Col>
  <Col xs={12} md={3} sm={6}>
    <Product imageUrl="https://images.unsplash.com/photo-1532007271951-c487760934ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxbXV1d21WRUYxWXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
  </Col>
  </Row>
  
  <br/>
  <br/>
  <Row>
  <Col xs={12} md={3} sm={6}>
    <Product imageUrl="https://images.unsplash.com/photo-1596460107916-430662021049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxbXV1d21WRUYxWXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
  </Col>
  
  <Col xs={12} md={3} sm={6}>
    <Product imageUrl=" https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=600" />
  </Col>
  <Col xs={12} md={3} sm={6}>
    <Product imageUrl="https://images.pexels.com/photos/687811/pexels-photo-687811.jpeg?auto=compress&cs=tinysrgb&w=600" />
  </Col>
  <Col xs={12} md={3} sm={6}>
    <Product imageUrl="https://images.pexels.com/photos/1276531/pexels-photo-1276531.jpeg?auto=compress&cs=tinysrgb&w=600" />
  </Col>
</Row>
       
  <br/>
  <br/>
  <Row>
  <Col xs={12} md={3} sm={6}>
    <Product imageUrl="https://images.pexels.com/photos/1072851/pexels-photo-1072851.jpeg?auto=compress&cs=tinysrgb&w=600" />
  </Col>
  
  <Col xs={12} md={3} sm={6}>
    <Product imageUrl="https://images.pexels.com/photos/3697717/pexels-photo-3697717.jpeg?auto=compress&cs=tinysrgb&w=600" />
  </Col>
  <Col xs={12} md={3} sm={6}>
    <Product imageUrl="https://images.pexels.com/photos/2422556/pexels-photo-2422556.jpeg?auto=compress&cs=tinysrgb&w=600" />
  </Col>
  <Col xs={12} md={3} sm={6}>
    <Product imageUrl="https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg?auto=compress&cs=tinysrgb&w=600" />
  </Col>
</Row>
    </Container>
    
    </>
  )
}
