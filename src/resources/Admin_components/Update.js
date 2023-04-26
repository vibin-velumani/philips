import React,{useEffect, useState} from 'react'
import { Col, Row, Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import axiosPrivate from '../../Api/axios';
import TimePicker from 'react-bootstrap-time-picker';

export default function Update(props) {
    const [name,setname]=useState()
const [category,setcategory]=useState()
const [price,setprice]=useState()
const [quantity,setquantity]=useState()
const [desc,setdesc]=useState()
const [id,setid]=useState()
const [preimg,setpreimg]=useState();
const [offer,setoffer]=useState("false");
const [offerdd,setofferdd]=useState();
const [offerper,setofferper]=useState();
const [offerduetime,setofferduetime]=useState();

useEffect(()=>{
    setid(props.row._id);
    setname(props.row.name);
    setdesc(props.row.desc)
    setcategory(props.row.category)
    setprice(props.row.price);
    setquantity(props.row.quantity)
    setpreimg(props.row.preimg)
    setoffer(props.row.offer);
    console.log(props.row.offer)
    if(props.row.offer==true)
    {
        setofferdd(props.row.offerdd);
        setofferduetime(props.row.offerduetime);
        setofferper(props.row.offerper);
    }
},[])

const clean=()=>{
    setprice('');
         setname('');
         setcategory('Electronics');
         setquantity('');
         setdesc('');
         setpreimg('');
}

    const clear=(e)=>{
         e.preventDefault();
         setprice('');
         setname('');
         setcategory('Electronics');
         setquantity('');
         setdesc('')
         setpreimg('');
    }


    const submit=async(e)=>{
        e.preventDefault();
        try{

            await axiosPrivate.post('product/updateproduct',{name,category,price,desc,quantity,id,preimg,offer,offerdd,offerper,offerduetime}).then((res)=>{
               clean();toast.success("Product Updated Successfully");props.setstatus(true)
            }).catch((err)=>{console.log(err)});

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
console.log(preimg);    

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
                            <FloatingLabel controlId="topic" label="Product Name" className="mb-3">
                                <Form.Control name="topic" type="text" placeholder="Title" value={name} onChange={(e) => { setname(e.target.value) }} />
                            </FloatingLabel>
                        </Col>
                        <Col sm={12} sx={12} md={6} lg={6} xl={6} xxl={6}>
                            <FloatingLabel controlId="category" label="Category" className="mb-3">
                                <Form.Select aria-label="Floating label select Category" required value={category} onChange={(e) => { setcategory(e.target.value) }}>
                                    <option value="Electronics" >Electronics</option>
                                    <option value="Kitchen Ware">Kitchen Ware</option>
                                    <option value="Essentials">Essentials</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                            <FloatingLabel controlId="floatingInput" label="Price" className="mb-3">
                                <Form.Control name="time" type="number" placeholder="Price" value={price} onChange={(e) => { setprice(e.target.value) }} />
                            </FloatingLabel>
                        </Col>
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                        <FloatingLabel controlId="floatingInput" label="Qunatity" className="mb-3">
                                <Form.Control name="time" type="number" placeholder="Price"  value={quantity} onChange={(e) => { setquantity(e.target.value) }} />
                            </FloatingLabel>
                        </Col>
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                        <FloatingLabel controlId="floatingInput" label="Description" className="mb-3">
                                <Form.Control name="time" type="text" placeholder="Description"  value={desc} onChange={(e) => { setdesc(e.target.value) }} />
                            </FloatingLabel>

                        </Col>
                        
                    </Row>
                    <Row>
                        
                       <Col sm={12} sx={12} md={2} lg={2} xl={2} xxl={2}>
                       <FloatingLabel controlId="offer" label="offer" className="mb-3">
                                <Form.Select aria-label="Floating label select Category" required value={offer} onChange={(e) => {  setoffer(e.target.value) }}>
                                    <option value="false" selected>No</option>
                                    <option value="true">Yes</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    { offer &&
                    <Row  >
                    <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                          <FloatingLabel controlId="floatingInput" label="Offer Percentage" className="mb-3">
                            <Form.Control name="offerper" type="number" placeholder="Offer "  value={offerper} onChange={(e) => { setofferper(e.target.value) }} />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                          <FloatingLabel controlId="floatingInput" label="Due Date" className="mb-3">
                            <Form.Control name="offerdue" type="date" placeholder="OfferDueDate"  value={offerdd} onChange={(e) => { setofferdd(e.target.value) }} />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                        <FloatingLabel controlId="floatingInput" label="Due Time" className="mb-3">
                            <TimePicker
                            start="00:00"
                            end="23:59"
                            step={30}
                            value={offerduetime}
                            onChange={(time) => setofferduetime(time)}
                            format={24}
                            showLeadingZeros={true}
                            />
                        </FloatingLabel>
                        </Col>
                    </Row>
                    }
                    <Row>
                        
                    <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                        <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Preview Image</Form.Label>
                                <Form.Control type="text" value={preimg} onChange={(event) => {
                    
                                    setpreimg(event.target.value)
                                }} />
                                <img src={preimg} alt=".."/>
                            </Form.Group>
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
