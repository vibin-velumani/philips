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
    //const [currentPage, setCurrentPage] = useState(1);
    const [ptitle, setptitle] = useState('');
    const [offerPer, setOffer] = useState('');
    const [offerdd,setofferdd] = useState();
  
    const [offerdueTime, setOfferDueTime] = useState(0);

   const submit=async(e)=>{
         e.preventDefault();
         try{
 
             await axiosPrivate.post('offers/addoffers',{name:ptitle,offPer:offerPer,offerdd,offerduetime:offerdueTime}).then((res)=>{
                clean();toast.success("Offer is successfully added")
             }).catch((err)=>{console.log(err)});

         }
         catch(err)
        {
            console.log("Some Thing Went Wrong")
        }
   }


const clean=()=>{
    setptitle('');
    setOffer('');
    setofferdd('')
   
}

const clear=(e)=>{
    e.preventDefault();
    setptitle('');
    setOffer('');
    setofferdd('')
    
}


    return (
        <>
            <ToastContainer />
            <br />
            <Container>
                <Container >
                    
                    
                    <br></br>
                    <Row>
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                            <FloatingLabel controlId="topic" label="Product Name" className="mb-3">
                              <Form.Control name="topic" type="text" placeholder="Title" value={ptitle} onChange={(e) => { setptitle(e.target.value) }} />
                            </FloatingLabel>
                        </Col>
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                          <FloatingLabel controlId="floatingInput" label="Offer Percentage" className="mb-3">
                            <Form.Control name="offerper" type="number" placeholder="Offer "  value={offerPer} onChange={(e) => { setOffer(e.target.value) }} />
                          </FloatingLabel>
                        </Col>
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                          <FloatingLabel controlId="floatingInput" label="Due Date" className="mb-3">
                            <Form.Control name="offerdue" type="date" placeholder="OfferDueDate"  value={offerdd} onChange={(e) => { setofferdd(e.target.value) }} />
                          </FloatingLabel>
                        </Col>
                        </Row>
                        <br></br>
                        <Row>
                
                        
                        <Col sm={12} sx={12} md={4} lg={4} xl={4} xxl={4}>
                        <FloatingLabel controlId="floatingInput" label="Due Time" className="mb-3">
                            <TimePicker
                            start="00:00"
                            end="23:59"
                            step={30}
                            value={offerdueTime}
                            onChange={(time) => setOfferDueTime(time)}
                            format={24}
                            showLeadingZeros={true}
                            />
                        </FloatingLabel>
                        </Col>
                    </Row>
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