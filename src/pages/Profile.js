import { async } from 'q';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import axios from '../Api/axios';
import { useAuth } from '../Authentication';

function Profile() {
  const [user,setUser]=useState();
  const id=useAuth().user_id;
  const load=async()=>{
    await axios.get('/auth/userdetails',{id}).then((res)=>{setUser(res.data.details);console.log(res.data.details)}).catch((err)=>{console.log("Something went wrong!!")})
  }
  useEffect(()=>{
    load();
  },[])
  return (
    <> {user===undefined?(<h1>Some thing went wriong</h1>)
   :( <Container>
      <h1>Welcome, {user.name}!</h1>
      <h2>Your Profile</h2>
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item><strong>Username:</strong> {user.name}</ListGroup.Item>
          <ListGroup.Item><strong>Email:</strong> {user.email}</ListGroup.Item>
          <ListGroup.Item>
            <strong>Shipping Address:</strong>
            <br />
    {user.address}
            {/* {user.shippingAddress.line1}<br />
            {user.shippingAddress.line2}<br />
            {user.shippingAddress.city}, {user.shippingAddress.state} {user.shippingAddress.zip}<br />
            {user.shippingAddress.country} */}
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <h2>Order History</h2>
      <Row>
        {user.orders.map(order => (
          <Col sm={6} md={4} lg={3} key={order.id}>
            <Card>
              <Card.Body>
                <Card.Title>Order ID: {order.product}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Order Total: ${order.total}</Card.Subtitle>
                <Card.Text>
                  Order Date: {order.purchaseDate }
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {user.orders.length===0?"No Orders Yet":""}
      </Row>
    </Container>)}
    </>
  );
}

export default Profile;
