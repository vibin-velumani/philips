import '../resources/css/Login.css';
import axios from '../Api/axios';
import { Row,Col,Container } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../Authentication';
import { Form,Button } from 'react-bootstrap';
function Login() {

    const location=useLocation();
    const auth=useAuth();
    const [Account,setAccount]=useState(true);
    const [name,setName]=useState('')
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[signconfirmPassword,setsignConfirmPassword]=useState('');
    const[signPassword,setsignPassword]=useState('');
    const [warning,setWarning]=useState('')
    const [otpsent,setOtpsent]=useState('')
    const[otp,setOtp]=useState('');

    const [fo,setFo]=useState(false)
    const navigate = useNavigate();
    const clear=()=>{
      setName('');
      setEmail('');
      setPassword('');
      setsignConfirmPassword('');
      setsignPassword('')
    }
    const login=async(e)=>{
      e.preventDefault()
try{
         await axios.post('auth/login',{email,password}).then((res)=>{auth.login(res.data.details); navigate(location.state?location.state.path:"/",{replace:true})}).catch((err)=>{console.log(err)})
}
catch(err)
{
   console.log(err);
}

    }
    const register=async(e)=>{
      e.preventDefault();
      await axios.post('auth/signin',{name,email,password:signPassword}).then((res)=>{setAccount(true)}).catch((err)=>{console.log(err)})

      // navigate(location.state?location.state.path:"/",{replace:true});   // replace:true is used to avoid stack of navigation history
}
const forget=async(e)=>{
       e.preventDefault();
       setOtpsent(true);
}

const submitOtp=async(e)=>{
  e.preventDefault();
  setOtpsent(false)
  setOtp('')
  setFo(false);
  clear();

}

    return (
    <>
    <div className='container-center'>
        <div className='container-center-wrapper'>
           <Container>
            <Row>
            
            <Col md={8} xs={1} sm={2} >

            </Col>
            
              <Col md={4} xs={10} sm={8} >



                {fo?(  
                  
                  (otpsent)?
                  ( <div className='center-form'>
                <h2>OTP Verification</h2><br></br><br></br>
                      <Form >
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>OTP</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(event) => setOtp(event.target.value)}
                        />
                      </Form.Group><br/>
                      <center>
                      <Button variant="primary" type="submit" onClick={submitOtp}>
                        Submit
                      </Button>
                      </center><br/>
  
                    </Form>
                    </div>                
                  )
                  :
                  (
                    <div className='center-form'>
                <h2>Reset Password</h2><br></br><br></br>
                      <Form >
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </Form.Group><br/>
                      <center>
                      <Button variant="primary" type="submit" onClick={forget}>
                        Send OTP
                      </Button>
                      </center><br/>
  
                    </Form>
                    </div>
                    
                    
                  )
                ):
                  (Account?
                    (
                      
                <div className='center-form'>
                <h2>Login</h2><br></br><br></br>
                      <Form onSubmit={login}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </Form.Group><br/>
                
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </Form.Group><br/>
                      <p onClick={()=>{setFo(true); clear()}}>Forget Password ?</p> {warning}
                      <center>
                      <Button variant="primary" type="submit">
                        Login
                      </Button>
                      </center><br/>
                      <p>Don't have an Account ?<span className='guest' onClick={()=>{setAccount(!Account)}}> Register</span></p>
  
                    </Form>
                    </div>
                  ):
                    (
                      
                <div className='center-form'>
                <h2>Register</h2><br></br><br></br>
                      <Form onSubmit={register}>
                      <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter name"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        />
                      </Form.Group><br/>
                
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </Form.Group><br/>
                
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={signPassword}
                          onChange={(event) => setsignPassword(event.target.value)}
                        />
                      </Form.Group><br/>
                
                      <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                          value={signconfirmPassword}
                          onChange={(event) => setsignConfirmPassword(event.target.value)}
                        />
                      </Form.Group><br/>
                         <center>
                      <Button variant="primary" type="submit">
                        Signup
                      </Button></center><br/>
                      <p>Have an Account ?<span className='guest' onClick={()=>{setAccount(!Account)}}> Sign In</span></p>
                    </Form>
                    
                  </div>
  
                    )
                    )    
                  }
              
                  
         
              </Col>
              <Col xs={1} sm={2} >

            </Col>
            </Row>
           </Container>


        </div>
    </div>
    
    
    
    </>
  )
}
export default Login;
