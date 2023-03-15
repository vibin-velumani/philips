import React from 'react'
import Header from "../resources/components/Header";
import Footer from "../resources/components/Footer";
import { Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
export default function Home(props) {
  return (
    <>
    <Header/>
    <Container>
       <Row>
          <h3>Offers</h3>
       </Row>
       
       <Row>
          <h3>Products</h3>
       </Row>
    
       
    </Container>
    
    <Footer/>
    </>
  )
}
