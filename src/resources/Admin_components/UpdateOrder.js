import React,{useEffect, useState} from 'react'
import { Col, Row, Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import axiosPrivate from '../../Api/axios';
import TimePicker from 'react-bootstrap-time-picker';

export default function Update(props) {
    console.log(props.row.paymenttype)
const [cartValue,setcartValue]=useState()
const [paymenttype,setpaymenttype]=useState()
const [desc,setdesc]=useState()
const [id,setid]=useState()
const [paymentstatus,setpaymentstatus]=useState()



const [orderstatus,setorderstatus]=useState();

useEffect(()=>{
    setpaymentstatus(props.row.paymentstatus)
    setid(props.row._id);
    setorderstatus(props.row.orderstatus);
    setcartValue(props.row.cartValue);
    setpaymenttype(props.row.paymenttype)
    
},[])

const clean=()=>{
    setcartValue('');
}

    const clear=(e)=>{
         e.preventDefault();
         setcartValue('');
    }


    const submit=async(e)=>{
        e.preventDefault();
        try{

            await axiosPrivate.post('order/update',{id,orderstatus}).then((res)=>{
                toast.success("Product Updated Successfully");props.setstatus(true)            }).catch((err)=>{console.log(err)});

        }
        catch(err)
       {
           console.log("Some Thing Went Wrong")
       }
  }
  const del=async(e)=>{
    e.preventDefault();
    try{

        await axiosPrivate.post('product/removeproduct',{id}).then((res)=>{
           clean();toast.success("Product Removed Successfully");props.setstatus(true)
        }).catch((err)=>{console.log(err)});

    }
    catch(err)
   {
       console.log("Some Thing Went Wrong")
   }
}

  return (
  <>
   <Container>
    <ToastContainer/>
                <Container >
                    <Row>
                        <Col>
                        <br></br>
                        <h3 onClick={()=>{props.setstatus(true)}}>Back</h3>
                        <br></br>
                        </Col>
                    </Row>
                    <Row  >
                        <Col sm={12} sx={12} md={6} lg={6} xl={6} xxl={6}>
                            <FloatingLabel controlId="topic" label="Order ID" className="mb-3">
                                <Form.Control name="topic" type="text" placeholder="Title" value={id} onChange={(e) => { setid(e.target.value) }} readOnly />
                            </FloatingLabel>
                        </Col>
                        <Col sm={12} sx={12} md={6} lg={6} xl={6} xxl={6}>
                            <FloatingLabel controlId="orderstatus" label="Order Status" className="mb-3">
                                <Form.Select aria-label="Floating label select Category" required value={orderstatus} onChange={(e) => { setorderstatus(e.target.value) }}>
                                    <option value="Processing" selected>Processing</option>
                                    <option value="Shipping">Shipping</option>
                                    <option value="Delivered">Delivered</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                            <FloatingLabel controlId="floatingInput" label="Amount" className="mb-3">
                                <Form.Control name="time" type="number" placeholder="Price" value={cartValue} onChange={(e) => { setcartValue(e.target.value) }} readOnly/>
                            </FloatingLabel>
                        </Col>
                        
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                        <FloatingLabel controlId="floatingInput" label="Payment type" className="mb-3">
                                <Form.Control name="time" type="text" placeholder="Description"  value={paymenttype} onChange={(e) => { setpaymenttype(e.target.value) }} readOnly/>
                            </FloatingLabel>

                        </Col>
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                        <FloatingLabel controlId="floatingInput" label="Payment Status" className="mb-3">
                                <Form.Control name="time" type="text" placeholder="Description"  value={paymentstatus} onChange={(e) => { setpaymentstatus(e.target.value) }} readOnly/>
                            </FloatingLabel>

                        </Col>
                        
                    </Row>
                    <Row>
        <Col>
          <h4>Shipping Address</h4>
          <p>Name : {props.row.shipping.name}</p>
          <p>Address : {props.row.shipping.address}</p>
          <p>Phone : {props.row.shipping.ph}</p> 
          <p>City : {props.row.shipping.city}</p>
          <p>State : {props.row.shipping.state}</p>
          <p>Zipcode : {props.row.shipping.zipcode}</p>

        </Col>
      </Row>

       <br></br><br></br>
                    <Row>
                       <Col sm={12} sx={12} md={3} lg={3} xl={3} xxl={3}>
                        </Col>
                        <Col sm={12} sx={12} md={6} lg={6} xl={6} xxl={6}>             
                        <Button onClick={()=>{props.setstatus(true)}} >Cancel</Button>  {" "}{" "}{" "}   {" "}{" "}{" "}
                       <Button onClick={clear}>Clear</Button>
                       {" "}{" "}{" "}   {" "}{" "}{" "}
                        
                           <Button onClick={submit} >Update</Button>
                           {" "}{" "}{" "}   {" "}{" "}{" "}
                        
                        <Button onClick={del} >Remove</Button>

                        </Col>
                        <Col sm={12} sx={12} md={3} lg={3} xl={3} xxl={3}>
                        </Col>
                    </Row>


                </Container>
            </Container>
  
  
  </>
  )
}
