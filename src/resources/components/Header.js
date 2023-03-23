import React from 'react'
import '../css/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth } from '../../Authentication';
import { useNavigate } from 'react-router-dom';
export default function Header() {
  const navigate=useNavigate();
  const auth=useAuth();
  console.log(auth.user)
  return (
    <Navbar collapseOnSelect expand="lg"  className="head">
      <Container>
        <Navbar.Brand onClick={()=>{navigate('/')}} className='brand' >CRYSTAL PARTS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link onClick={()=>{navigate('/')}} className='space'>Home</Nav.Link>
            <Nav.Link href="products" className='space'>Products</Nav.Link>
            <Nav.Link href="offers" className='space'>Offers</Nav.Link>

            <Nav.Link href="#pricing" className='space'>Cart</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/profile')}} className='space'>Profile</Nav.Link>
             {(auth.user!==null)?<Nav.Link  className='space' onClick={auth.logout}>Logout</Nav.Link>
             :<Nav.Link onClick={()=>{navigate('/login')}} className='space'>Login</Nav.Link>}
            
            
          </Nav>
        
               
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}