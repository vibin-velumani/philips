import React from 'react'
import '../css/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate} from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg"  className="head">
      <Container>
        <Navbar.Brand href="#home" className='brand' >Shree Maruthi Agencies </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#features" className='space'>Home</Nav.Link>
            <NavDropdown  className='space' title="Products" id="collasible-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Lights</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Fans
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" >Iron Box</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Switches
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
              Kitchen Items
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#offers" className='space'>Offers</Nav.Link>

            <Nav.Link href="#pricing" className='space'>Cart</Nav.Link>

            <Nav.Link href="#pric" className='space'>Contact Us</Nav.Link>
             
            <Nav.Link href="#deets" className='space'>Login</Nav.Link>
            
          </Nav>
        
               
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
