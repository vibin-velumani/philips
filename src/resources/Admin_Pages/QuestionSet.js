import { useState } from 'react';
import { Col, Row, Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import axiosPrivate from '../../Api/axios';
import style from '../Admin_css/question.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useAuth } from '../../Authentication';
import TimePicker from 'react-bootstrap-time-picker';

export default function QuestionSet() {
    const auth = useAuth();
    const [currentPage, setCurrentPage] = useState(1);
    const [ptitle, setptitle] = useState('');
    const [category, setCategory] = useState('Electronics');
    const [price, setPrice] = useState();
    const [quantity, setquantity] = useState();
    const [preimg, setpreimg] = useState('');
    const [description,setdescription]=useState('');
    const [offer,setoffer]=useState("false");
    const [offerdd,setofferdd]=useState();
    const [offerper,setofferper]=useState();
    const [offerduetime,setofferduetime]=useState();
    

   const submit=async(e)=>{
         e.preventDefault();
         try{
 
             await axiosPrivate.post('product/addproduct',{name:ptitle,category,price,desc:description,quantity,preimg,offer:offer=="true"?true:false,offerdd,offerper,offerduetime}).then((res)=>{
                clean();toast.success("Product Added Successfully")
             }).catch((err)=>{console.log(err)});

         }
         catch(err)
        {
            console.log("Some Thing Went Wrong")
        }
   }


const clean=()=>{
    setpreimg('')
         setPrice('');
         setptitle('');
         setCategory('Electronics');
         setquantity('');
         setpreimg();
         setdescription('')
}
    const clear=(e)=>{
         e.preventDefault();
         setPrice('');
         setptitle('');
         setCategory('Electronics');
         setquantity();
         setpreimg();
         setdescription('')
    }

    return (
        <>
            <ToastContainer />
            <br />
            <Container>
                <Container >
                    
                    <Row  >
                        <Col sm={12} sx={12} md={6} lg={6} xl={6} xxl={6}>
                            <FloatingLabel controlId="topic" label="Product Name" className="mb-3">
                                <Form.Control name="topic" type="text" placeholder="Title" value={ptitle} onChange={(e) => { setptitle(e.target.value) }} />
                            </FloatingLabel>
                        </Col>
                        <Col sm={12} sx={12} md={6} lg={6} xl={6} xxl={6}>
                            <FloatingLabel controlId="category" label="Category" className="mb-3">
                                <Form.Select aria-label="Floating label select Category" required value={category} onChange={(e) => { setCategory(e.target.value) }}>
                                    <option value="Electronics" selected>Electronics</option>
                                    <option value="Kitchen Ware">Kitchen Ware</option>
                                    <option value="Essentials">Essentials</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                            <FloatingLabel controlId="floatingInput" label="Price" className="mb-3">
                                <Form.Control name="time" type="number" placeholder="Price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                            </FloatingLabel>
                        </Col>
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                        <FloatingLabel controlId="floatingInput" label="Qunatity" className="mb-3">
                                <Form.Control name="time" type="number" placeholder="Price"  value={quantity} onChange={(e) => { setquantity(e.target.value) }} />
                            </FloatingLabel>
                        </Col>
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                        <FloatingLabel controlId="floatingInput" label="Description" className="mb-3">
                                <Form.Control name="time" type="text" placeholder="Description"  value={description} onChange={(e) => { setdescription(e.target.value) }} />
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
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                        <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Preview Image</Form.Label>
                                <Form.Control name="preview Image" type="text" placeholder="Enter Link"  value={preimg} onChange={(e) => { setpreimg(e.target.value) }} />

                            </Form.Group>
                        </Col>
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                        <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Product Images</Form.Label>
                                <Form.Control type="file" onChange={(event) => {
                                    let file = event.target.files[0]
                                    setpreimg(URL.createObjectURL(file))
                                }} multiple/>
                            </Form.Group>
                        </Col>
                        <Col sm={12} sx={12} md={2} lg={2} xl={2} xxl={2}>
                        </Col>
                    </Row>
                    { offer=="true" &&
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
       <br></br><br></br>
                    <Row>
                       <Col sm={12} sx={12} md={3} lg={3} xl={3} xxl={3}>
                        </Col>
                        <Col sm={12} sx={12} md={3} lg={3} xl={3} xxl={3}>
                               <Button onClick={clear}>Clear</Button>
                        </Col>
                        <Col sm={12} sx={12} md={3} lg={3} xl={3} xxl={3}>
                        
                           <Button onClick={submit} >Submit</Button>

                        </Col>
                        <Col sm={12} sx={12} md={3} lg={3} xl={3} xxl={3}>
                        </Col>
                    </Row>


                </Container>
            </Container>
        </>
    )
}