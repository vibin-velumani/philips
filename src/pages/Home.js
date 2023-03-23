import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
export default function Home(props) {
  return (
    <>
    <Container>
       <Row>
          <h3>Offers</h3>
       </Row>
       
       <Row>
          <h3>Products</h3>
       </Row>
       
    </Container>
    
    </>
  )
}
