import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import product1 from '../resources/images/angle-grinders.jpg';
import product2 from '../resources/images/cleaning-brush_res.webp';
import product3 from '../resources/images/cordless-tools.jpg';
import product4 from '../resources/images/grass-trimmers.jpg';
import banner1 from '../resources/images/banner1.jpg';
import banner2 from '../resources/images/banner2.jpg';
import banner3 from '../resources/images/bosch_whwd_2in1-2_gif_1200x675.gif';
import news1 from '../resources/images/bosch_whwd_2in1-2_gif_1200x675.gif';
import news2 from '../resources/images/news2.gif';
import news3 from '../resources/images/news3.gif';
import ChatBot from "react-simple-chatbot";
import { Segment } from 'semantic-ui-react';
import "../resources/css/Home.css"
import bot from "../resources/images/chatbot.png"



export default function HomePage() {
  const navigate = useNavigate();
  const [flag,setflag]=useState(false);
  const steps = [  {    id: '1',    message: 'Welcome to Crystal Parts! How can we assist you today?',    trigger: '2',  },  {    id: '2',    options: [      { value: 'shop', label: 'Start shopping', trigger: '3' },      { value: 'support', label: 'Customer support', trigger: '11' },    ],
  },
  {
    id: '3',
    message: 'Great! What would you like to shop for today?',
    trigger: '4',
  },
  {
    id: '4',
    options: [
      { value: 'automotive', label: 'Automotive parts', trigger: '5' },
      { value: 'electronics', label: 'Electronics', trigger: '6' },
      { value: 'apparel', label: 'Apparel', trigger: '7' },
    ],
  },
  {
    id: '5',
    message: 'We have a wide range of automotive parts! What are you looking for specifically?',
    trigger: '8',
  },
  {
    id: '6',
    message: 'We have a wide range of electronics! What are you looking for specifically?',
    trigger: '8',
  },
  {
    id: '7',
    message: 'We have a wide range of apparel! What are you looking for specifically?',
    trigger: '8',
  },
  {
    id: '8',
    user: true,
    trigger: '9',
  },
  {
    id: '9',
    message: 'Got it! We will check our inventory and let you know if we have any {previousValue} available. Would you like to proceed with your purchase?',
    trigger: '10',
  },
  {
    id: '10',
    options: [
      { value: 'yes', label: 'Yes', trigger: '12' },
      { value: 'no', label: 'No', trigger: '13' },
    ],
  },
  {
    id: '11',
    message: 'Our customer support team is available 24/7. How can we assist you?',
    trigger: '2',
  },
  {
    id: '12',
    message: 'Great! We have received your order and will process it shortly. Thank you for shopping with Crystal Parts!',
    end: true,
  },
  {
    id: '13',
    message: 'No problem. Let us know if you need any further assistance. Thank you for visiting Crystal Parts!',
    end: true,
  },
];

 

  
  return (
    <>
    <div className='segment'>
     
      <img src={bot} onClick={()=>setflag(!flag)} style={{
          bottom: '20px',
          right: '20px',
          width: '65px',
          height: '65px',
          borderRadius: '50%',
          backgroundColor: '#4db6ac',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
          cursor: 'pointer',
        }}></img>

      {flag &&
           <ChatBot steps={steps}  opened={true} 
          />
}
    </div>
    <Container fluid>
      <Carousel>
        <Carousel.Item style={{  height: '450px' }}>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item style={{  height: '450px' }}>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item style={{ height: '450px' }}>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
        </Carousel.Item>

      </Carousel>
      </Container>
      <Container className="mt-5">
        <h2>Featured Products</h2>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={product1} />
              <Card.Body>
                <Card.Title>Angel Grinder</Card.Title>
                <Card.Text>
                  The Bosch angle grinder is a versatile and powerful tool designed for cutting, grinding, and sanding a variety of materials.
                  It features a powerful motor and a compact design that makes it easy to handle and control.
                </Card.Text>
                <Button variant="primary" onClick={() => navigate('/products')}>
                Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={product2} />
              <Card.Body>
                <Card.Title>Brush Cleaner</Card.Title>
                <Card.Text>
                  The Bosch brush cleaner is a powerful and efficient tool designed to help you clean tough dirt and grime from various surfaces
                  . It features a compact and ergonomic design that allows for comfortable handling and ease of use..
                </Card.Text>
                <Button variant="primary" onClick={() => navigate('/products')}>
                Explore
                                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={product3} />
              <Card.Body>
                <Card.Title>Cordless Tool</Card.Title>
                <Card.Text>
                  The Bosch cordless tool is a versatile and powerful tool designed for a variety of DIY and professional applications.
                  It is powered
                  by a lithium-ion battery that provides long-lasting performance and features an ergonomic  comfortable handling.
                </Card.Text>
                <Button variant="primary" onClick={() => navigate('/products')}>
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={product4} />
              <Card.Body>
                <Card.Title>Grass Trimmer</Card.Title>
                <Card.Text>
                  The Bosch grass trimmer is a lightweight and efficient tool designed for trimming grass and weeds in small to medium-sized gardens.
                  It features a powerful motor and a telescopic handle that  it easy to adjust the length to suit your needs.
                </Card.Text>
                <Button variant="primary" onClick={() => navigate('/products')}>
                Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
           

      <Container className="mt-5">
        <h2>News &amp; Articles</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={news1} />
              <Card.Body>
                <Card.Title>News &amp; Article 1</Card.Title>
                <Card.Text>
                  The Bosch cordless tool is a versatile and powerful tool designed for a variety of DIY and professional applications.
                  It is powered
                  by a lithium-ion battery that provides long-lasting performance and features an ergonomic  comfortable handling.
                </Card.Text>
                <Button variant="primary" onClick={() => navigate('/ContactUs')}>
                  Read more
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={news2} />
              <Card.Body>
                <Card.Title>News &amp; Article 2</Card.Title>
                <Card.Text>
                  The Bosch grass trimmer is a lightweight and efficient tool designed for trimming grass and weeds in small to medium-sized gardens.
                  It features a powerful motor and a telescopic handle that makes it easy to adjust the length to suit your needs.
                </Card.Text>
                <Button variant="primary" onClick={() => navigate('/ContactUs')}>
                  Read more
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={news3} />
              <Card.Body>
                <Card.Title>News &amp; Article 3</Card.Title>
                <Card.Text>
                  The Bosch angle grinder is a versatile and powerful tool designed for cutting, grinding, and sanding a variety of materials.
                  It features a powerful motor and a compact design that makes it easy to handle and control.
                </Card.Text>
                <Button variant="primary" onClick={() => navigate('/ContactUs') }>
                  Read more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      
    </>
  );
}