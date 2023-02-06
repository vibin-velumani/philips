import React from 'react'
import '../css/Footer.css';
import { Row,Col,Container } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import {useNavigate} from 'react-router-dom';
import logofoot from '../images/bg.png';
export default function Footer() {
  const navigate = useNavigate();
  return(<>
  <Container className='footer-top'>
      <span className='footer-top-item'><img src={logofoot} alt="..."/></span>
  </Container>
  <Container fluid className='footer-main'>
      <Row className='foot-row'>
          <Col sm={3} md={3} xs={6}><ul type="none" className='foot-li'>
              <li onClick={()=>{navigate('/')}}>Home</li>
              <li onClick={()=>{navigate('/about')}}>About Us</li>
              <li onClick={()=>{navigate('/support')}}>Contact Us</li>
              <li>Offers</li>
              <li  onClick={()=>{navigate('/support')}}>Support</li>
              <li>Careers</li>
              </ul></Col>
          <Col sm={3} md={3}  xs={6}>
              <ul type="none" className='foot-li'>
                  <li>Fans</li>
                  <li>Kitchen wares</li>
                  <li>Iron box</li>
                  <li >Lights</li>
                  <li>Philips Hue</li>
                  <li>Health Care</li>
                  {/* &#38; */}
              </ul>
          </Col>
          <Col sm={3} md={3}  xs={6}>
              <ul type="none" className='foot-li'>
                  <li>Electronics</li>
                  <li>New Arrivals</li>
                  <li>Bulk Discount</li>
                  <li>Location</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                  {/* &#38; */}
              </ul>
          </Col>
          <Col sm={6} md={3}>
          <ul type="none" className='foot-li'>
         
              <li>We are in</li>
              <br></br>
              <SocialIcon url="https://jaketrent.com" bgColor="#4267B2" fgColor="#FEFEFE" network="facebook" style={{marginRight:"20px"}}/>
              <SocialIcon url="https://jaketrent.com" bgColor="#4267B2" fgColor="#FEFEFE" network="instagram" style={{marginRight:"20px"}}/>
              <SocialIcon url="https://jaketrent.com" bgColor="#4267B2" fgColor="#FEFEFE" network="twitter" style={{marginRight:"20px"}}/>
              </ul>
              </Col>
      </Row>
  </Container>
  <Container fluid className='footer-end'>
      <p className='footer-end-txt'>© 2022 Team Beta. All rights reserved.</p>
  </Container>
  </>);
}
