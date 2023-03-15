import React,{useEffect, useState} from 'react'
import { Col, Row, Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import axiosPrivate from '../../Api/axios';
export default function Update(props) {
    const [name,setname]=useState()
const [category,setcategory]=useState()
const [price,setprice]=useState()
const [quantity,setquantity]=useState()
const [desc,setdesc]=useState()
const [id,setid]=useState()

useEffect(()=>{
    setid(props.row._id);
    setname(props.row.name);
    setdesc(props.row.desc)
    setcategory(props.row.category)
    setprice(props.row.price);
    setquantity(props.row.quantity)
},[])

const clean=()=>{
    setprice('');
         setname('');
         setcategory('Electronics');
         setquantity('');
         setdesc('')
}
    const clear=(e)=>{
         e.preventDefault();
         setprice('');
         setname('');
         setcategory('Electronics');
         setquantity('');
         setdesc('')
    }


    const submit=async(e)=>{
        e.preventDefault();
        try{

            await axiosPrivate.post('product/updateproduct',{name,category,price,desc,quantity,id}).then((res)=>{
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

  return (
  <>
   <Container>
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
