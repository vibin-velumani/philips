import React, { useState } from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom';
import Adminforgetpassword from '../Admin_components/Adminforgetpassword';
import AdminLoginForm from '../Admin_components/AdminLoginForm'
import stylelogin from '../Admin_css/adminlogin.module.css'
import { useNavigate } from 'react-router-dom';
export default function AdminLogin() {
  const [status,setStatus]=useState("pending");
  const location=useLocation();
  const navigate=useNavigate();

  const route=()=>
  { 
    switch(status)
    {
      case "pending":
        return <AdminLoginForm status={status} setStatus={setStatus}/>
      case "forgot":
        return <Adminforgetpassword status={status} setStatus={setStatus}/>
      case "success":
        return navigate(location.state?location.state.path:"/admin",{replace:true});
      default:
        return <h2>Some Thing Went Wrong</h2>
      }
  }
  return (
    <>
    <Container fluid className={stylelogin.loginWrapper}>
      <Row className='align-items-center vh-100'>
        <Col md={4} sm={2} xs={1}></Col>
        
        <Col md={4} sm={8} xs={10}>



              {route()}
               


        </Col>
        
        <Col md={4} sm={2} xs={1}></Col>
      </Row>
    </Container>
    </>
  )
}
