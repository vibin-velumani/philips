import { async } from 'q';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import axios from '../Api/axios';
import { useAuth } from '../Authentication';
import { ToastContainer,toast } from 'react-toastify';




function Profile() {
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

    await axios.post('/auth/userdetails',{id:ids}).then((res)=>{setUser(res.data.details);setName(res.data.details.name);setEmail(res.data.details.email);setemailvflag(res.data.details.verified);
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
    
     {user===undefined?(<h1>Some thing went wriong</h1>)
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
            <a className={`list-group-item list-group-item-action${loader === 4 ? " active" : ""}`} data-toggle="list" onClick={()=>{setLoader(4)}}>Notifications</a>
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
