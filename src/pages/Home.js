import React from 'react'
import Header from "../resources/components/Header";
import Footer from "../resources/components/Footer";
import { Products } from '../resources/components/Products';
import { Container, Row } from 'react-bootstrap';
export default function Home(props) {
  return (
    <>
    <Header user={props.user} setUser={props.setUser}/>
    <Container>
       <Row>
          <h3>Offers</h3>
       </Row>
       
       <Row>
          <h3>Products</h3>
       </Row>
       <Products/>
       
    </Container>
    
    <Footer/>
    </>
  )
}
