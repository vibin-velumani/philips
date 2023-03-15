import React, { useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify';
import axios from '../../Api/axios';

export default function Newadmin(props) {
    const [email,setemail]=useState();
    const add=async()=>{
        await axios.post("auth/addadmin",{email,status:true}).then((res)=>{
          toast.success("New Admin Added");props.setstatus(true);
        }).catch((err)=>{console.log(err)})
    }
    const remove=async()=>{
        await axios.post("auth/addadmin",{email,status:false}).then((res)=>{
          toast.success("Admin Removed");props.setstatus(true);
        }).catch((err)=>{console.log(err)})
    }
  return (
    <>
    <ToastContainer/>
    <Container>
        <Row>
            <Col><h3 onClick={()=>{props.setstatus(true)}}> Back</h3></Col>
        </Row>
    <Row className='align-items-center vh-100'>
                        <Col sm={12} sx={12} md={3} lg={3} xl={3} xxl={3}></Col>
                        <Col sm={12} sx={12} md={6} lg={6} xl={6} xxl={6}>
                        <h3>Add Admin</h3><br/>
                            <FloatingLabel controlId="topic" label="Email Address" className="mb-3">
                                <Form.Control name="topic" type="text" placeholder="Enter Email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                            </FloatingLabel>
                            <center>
                            <Button onClick={remove}>Remove</Button>
                             {" "}{" "}{" "}{" "}
                            <Button onClick={add}>Add</Button>
                            </center>

                        </Col>
                        <Col sm={12} sx={12} md={3} lg={3} xl={3} xxl={3}></Col>

                   </Row>

    </Container>
    
    </>
  )
}
