import React from 'react'
import '../css/Footer.css';
import { Row,Col,Container } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import {useNavigate} from 'react-router-dom';
import logofoot from '../images/MSTORE.png';
export default function Footer() {
  const navigate = useNavigate();
  return(<>
  <Container className='footer-top'>
      <span className='footer-top-item'><img src={logofoot} className="logofoot" alt="..."/></span>
  </Container>
  <Container fluid className='footer-main'>
      <Row className='foot-row'>
          <Col sm={3} md={3} xs={6}><ul type="none" className='foot-li'>
              <li onClick={()=>{navigate('/')}}>Home</li>
              <li onClick={()=>{navigate('/about')}}>About Us</li>
              <li onClick={()=>{navigate('/ContactUs')}}>Contact Us</li>
              <li>Offers</li>
              <li  onClick={()=>{navigate('/support')}}>Support</li>
              <li>Careers</li>
              </ul></Col>
          <Col sm={3} md={3}  xs={6}>
              <ul type="none" className='foot-li'>
                  <li>Home Appliances</li>
                  <li>Power Tools</li>
                  <li>Garden tools</li>
                  <li >Measuring tools</li>
                  <li>Cleaning tools </li>
                  <li>Smart Home</li>
                  {/* &#38; */}
              </ul>
          </Col>
          <Col sm={3} md={3}  xs={6}>
              <ul type="none" className='foot-li'>
                  <li>Electronics</li>
                  <li>New Arrivals</li>
                  <li>Bulk Discount</li>
                  <li onClick={()=>{navigate('/aboutus')     }}>Location</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                  {/* &#38; */}
              </ul>
          </Col>
          <Col sm={6} md={3}>
          <ul type="none" className='foot-li'>
         
              <li>We are in</li>
              <br></br>
              <SocialIcon url="https://jaketrent.com" bgColor="#4267B2" fgColor="#FEFEFE" network="facebook" className="social"/>
              <SocialIcon url="https://jaketrent.com" bgColor="#4267B2" fgColor="#FEFEFE" network="instagram" className="social"/>
              <SocialIcon url="https://jaketrent.com" bgColor="#4267B2" fgColor="#FEFEFE" network="twitter" className="social" />
              </ul>
              </Col>
      </Row>
  </Container>
  <Container fluid className='footer-end'>
      <p className='footer-end-txt'>© 2023 Team Beta. All rights reserved.</p>
  </Container>
  </>);
}
