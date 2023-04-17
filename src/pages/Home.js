import React from 'react';
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

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
    <Carousel>
      <Carousel.Item style={{ width: '1550px', height: '450px' }}>
  <img
    className="d-block w-100"
    src={banner1}
    alt="First slide"
  />
</Carousel.Item>

<Carousel.Item style={{ width: '1550px', height: '450px' }}>
  <img
    className="d-block w-100"
    src={banner2}
    alt="Second slide"
  />
</Carousel.Item>

        <Carousel.Item style={{ width: '1550px', height: '450px' }}>
  <img
    className="d-block w-100"
    src={banner3}
    alt="Third slide"
  />
</Carousel.Item>

      </Carousel>

      <Container className="mt-5">
        <h2>Featured Products</h2>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={product1} />
              <Card.Body>
                <Card.Title>Product 1</Card.Title>
                <Card.Text>
                The Bosch angle grinder is a versatile and powerful tool designed for cutting, grinding, and sanding a variety of materials.
                 It features a powerful motor and a compact design that makes it easy to handle and control.
                </Card.Text>
                <Button variant="primary" onClick={() => navigate('/products/1')}>
                  Learn more
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={product2} />
              <Card.Body>
                <Card.Title>Product 2</Card.Title>
                <Card.Text>
                The Bosch brush cleaner is a powerful and efficient tool designed to help you clean tough dirt and grime from various surfaces
                . It features a compact and ergonomic design that allows for comfortable handling and ease of use..
                </Card.Text>
                <Button variant="primary" onClick={() => navigate('/products/2')}>
                  Learn more
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={product3} />
              <Card.Body>
                <Card.Title>Product 3</Card.Title>
                <Card.Text>
                The Bosch cordless tool is a versatile and powerful tool designed for a variety of DIY and professional applications.
                 It is powered
                 by a lithium-ion battery that provides long-lasting performance and features an ergonomic  comfortable handling.
</Card.Text>
<Button variant="primary" onClick={() => navigate('/products/3')}>
Learn more
</Button>
</Card.Body>
</Card>
</Col>
<Col md={3}>
<Card>
<Card.Img variant="top" src={product4} />
<Card.Body>
<Card.Title>Product 4</Card.Title>
<Card.Text>
The Bosch grass trimmer is a lightweight and efficient tool designed for trimming grass and weeds in small to medium-sized gardens.
It features a powerful motor and a telescopic handle that makes it easy to adjust the length to suit your needs.
</Card.Text>
<Button variant="primary" onClick={() => navigate('/products/4')}>
Learn more
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
            <Button variant="primary" onClick={() => navigate('/news/1')}>
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
            <Button variant="primary" onClick={() => navigate('/news/2')}>
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
            <Button variant="primary" onClick={() => navigate('/news/3')}>
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