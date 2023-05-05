import { async } from 'q';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import axios from '../Api/axios';
import { useAuth } from '../Authentication';
import { ToastContainer,toast } from 'react-toastify';
import { ClimbingBoxLoader } from 'react-spinners';
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBProgress,
  MDBProgressBar,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";


function Profile() {

const[orders,setorders]=useState()


  const [user,setUser]=useState();
  const ids=JSON.parse(useAuth().user)._id;
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [emailvflag,setemailvflag]=useState(false);
  const [ph,setPh]=useState();
  const [address,setAddress]=useState();
  const [state,setState]=useState();
  const [country,setCountry]=useState();
  const [loader,setLoader]=useState(1);
const[DOB,setdob]=useState();



const [password,setpassword]=useState('');
const [cpassword,setcpassword]=useState('');
const [opassword,setopassword]=useState('');
const[flag,setFlag]=useState(false);
const[ieflag,setieflag]=useState(false);

const updateInfo=async(e)=>
{
  e.preventDefault();
   await axios.post('/auth/updateDetails',{id:ids,upd:{name,address,country,state,ph,DOB}}).then((res)=>{
    setUser(res.data.details);
    setName(res.data.details.name);
    setEmail(res.data.details.email);
    setemailvflag(res.data.details.verified);
    setAddress(res.data.details.address);
    setPh(res.data.details.ph);
    setdob(res.data.details.DOB);
    setState(res.data.details.state);
    setCountry(res.data.details.country);
    toast.success("Updated Data Successfully");
   }).catch((err)=>{console.log(err)});
}




  const load=async()=>{
    console.log(ids);

    await axios.post('/auth/userdetails',{id:ids}).then((res)=>{
      console.log(res.data.details.orders)
      setorders(res.data.details.orders);
      setUser(res.data.details);setName(res.data.details.name);setEmail(res.data.details.email);setemailvflag(res.data.details.verified);
    setAddress(res.data.details.address);
    setPh(res.data.details.ph);
    setdob(res.data.details.DOB);
    setState(res.data.details.state);
    setCountry(res.data.details.country);
    }).catch((err)=>{console.log("Something went wrong!!")})
  }
  useEffect(()=>{
    load();

  },[])




  function display(ch)
  {
    if(ch===1)
    {
      return (<div class="tab-pane fade active show" >
  
      <div class="card-body">
        <div class="form-group">
          <label class="form-label">Name</label>
          <input type="text" class="form-control mb-1" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div class="form-group">
          <label class="form-label">E-mail</label>
          <input type="text" class="form-control mb-1" value={email} readOnly/>
          {emailvflag===null || emailvflag===undefined?
          <div class="alert alert-warning mt-3">
            Your email is not confirmed. Please check your inbox.<br/>
            <a href="javascript:void(0)">Resend confirmation</a>
          </div>:<></>
          }
        </div>
        <div class="form-group">
          <label class="form-label">Phone</label>
          <input type="text" class="form-control" value={ph} onChange={(e)=>{setPh(e.target.value)}}/>
        </div>
        <div class="form-group w-50">
          <label class="form-label" value={DOB} onChange={(e)=>{setdob(e.target.value)}}>Date Of Birth</label>
          <input type="date" class="form-control" />
        </div>
        
        <div class="form-group">
          <label class="form-label">Address</label>
          <input type="text" class="form-control" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
        </div>
        
        <div class="form-group">
          <label class="form-label">State</label>
          <input type="text" class="form-control" value={state} onChange={(e)=>{setState(e.target.value)}}/>
        </div>
        
        <div class="form-group">
          <label class="form-label">Country</label>
          <input type="text" class="form-control" value={country} onChange={(e)=>{setCountry(e.target.value)}}/>
        </div>
      
    <div class="text-right mt-3">
      <button type="button" class="btn btn-primary" onClick={updateInfo}>Save changes</button>&nbsp;
      <button type="button" class="btn btn-danger">Cancel</button>
    </div>
      </div>
      
  
    </div>)
    }
    else if(ch===2)
    {
      return <div class="tab-pane fade active show" >
        
        <div class="card-body pb-2">

          <div class="form-group">
            <label class="form-label">Current password</label>
            <input type="password" class="form-control" value={opassword} onChange={(e)=>{setopassword(e.target.value)}}/>
          </div>
          {ieflag ?   <div class="alert alert-warning mt-3">
           Password Incorrect.<br/>
           </div>:<></>
          }
          <div class="form-group">
            <label class="form-label">New password</label>
            <input type="password" class="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
          </div>

          <div class="form-group">
            <label class="form-label">Repeat new password</label>
            <input type="password" class="form-control" value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}/>
          </div>
          {flag ?   <div class="alert alert-warning mt-3">
           Mismatched Password.<br/>
           </div>:<></>
          }

          <div class="text-right mt-3">
      <button type="button" class="btn btn-primary" onClick={handlepassword}>Reset</button>&nbsp;
      <button type="button" class="btn btn-danger">Cancel</button>
    </div>
        </div>
      </div>;
    }
    else if(ch===3)
    {
      return (
<>
        <h2>Order History</h2>
        <Row>
        
        {orders.map((order) => (
    <MDBCard className="shadow-0 border mb-4">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol md="2">
                          <MDBCardImage
                            src={order.cart[0].preimg}
                            fluid
                            alt="Phone"
                          />
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0">{order.cart[0].productname}</p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">{order.paymenttype}</p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">
                            Payment : {order.paymentstatus}
                          </p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">Qty: {order.cart[0].quantity}</p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small"> ₹{order.cart[0].price}</p>
                        </MDBCol>
                      </MDBRow>
                      <hr
                        className="mb-4"
                        style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                      />
                      <MDBRow className="align-items-center">
                        <MDBCol md="2">
                          <p className="text-muted mb-0 small">Track Order</p>
                        </MDBCol>
                        <MDBCol md="10">
                          <MDBProgress
                            style={{ height: "6px", borderRadius: "16px" }}
                          >
                            <MDBProgressBar
                              style={{
                                borderRadius: "16px",
                                backgroundColor: "#a8729a",
                              }}
                              width={65}
                              valuemin={0}
                              valuemax={100}
                            />
                          </MDBProgress>
                          <div className="d-flex justify-content-around mb-1">
                            <p className="text-muted mt-1 mb-0 small ms-xl-5">
                              Out for delivary
                            </p>
                            <p className="text-muted mt-1 mb-0 small ms-xl-5">
                              {order.orderstatus}
                            </p>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
))}
          {orders.length===0?"No Orders Yet":""}
        </Row>
        </>);
    }
    else if(ch===4)
    {
      return <h6>No Notification</h6>
    }
    else
    {
      return (<h6>Something Went Wrong</h6>)
    }
  }




const handlepassword=async(e)=>{
e.preventDefault();
     if(password!==cpassword)
     {
          setFlag(true);
     }
     else
     {
      setFlag(false);
        await axios.post('/auth/changepass',{id:ids,oldpass:opassword,password}).then((res)=>{console.log(res);
        setFlag(false);
        setieflag(false);
        setpassword('');
        setopassword('');
        setcpassword('');
        toast.success("Password Changes Successfully");
        }).catch((err)=>{
          console.log();
          if(err.response.data.data.message==="password dosen't match")
          {
            setieflag(true);
          }
          else
          {
            setieflag(false);
          }
          
        }) 
     }
}







  return (
    <>
    
     {user===undefined?(
     <>
 <div className="d-flex justify-content-center align-items-center vh-100">
      <ClimbingBoxLoader color="#36d7b7" />
    </div>
         </>
     )
   :( <Container >
      
      <div class="container light-style flex-grow-1 container-p-y">
      <ToastContainer/>
    <h4 class="font-weight-bold py-3 mb-4">
      Account settings

    </h4>

    <div class="card overflow-hidden">
      <div class="row no-gutters row-bordered row-border-light">
        <div class="col-md-3 pt-0">
          <div class="list-group list-group-flush account-settings-links">
            <a className={`list-group-item list-group-item-action${loader === 1 ? " active" : ""}`}  data-toggle="list"  onClick={()=>{setLoader(1)}}>General</a>
            <a className={`list-group-item list-group-item-action${loader === 2 ? " active" : ""}`} data-toggle="list"  onClick={()=>{setLoader(2)}}>Change password</a>
            <a className={`list-group-item list-group-item-action${loader === 3 ? " active" : ""}`} data-toggle="list" onClick={()=>{setLoader(3)}}>Orders</a>
            {/* <a className={`list-group-item list-group-item-action${loader === 4 ? " active" : ""}`} data-toggle="list" onClick={()=>{setLoader(4)}}>Notifications</a> */}
          </div>
        </div>
        <div class="col-md-9">
              {display(loader)}
        </div>
      </div>
    </div>


  </div>

    </Container>)}
    </>
  );
}

export default Profile;
