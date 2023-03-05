import '../resources/css/Login.css';
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
    const[signconfirmPassword,setsignConfirmPassword]=useState();
    const[signPassword,setsignPassword]=useState();
    const navigate = useNavigate();
    const submit=()=>{
           auth.Login(null);
           navigate(location.state?location.state.path:"/",{replace:true});   // replace:true is used to avoid stack of navigation history
    }
    return (
    <>
    <div className='container-center'>
        <div className='container-center-wrapper'>
           <Container>
            <Row>
            
            <Col md={8} xs={8} sm={6} >

            </Col>
            
              <Col md={4} xs={4} sm={6} >
              
                  {Account?
                  (
                    
              <div className='center-form'>
              <h2>Login</h2><br></br><br></br>
                    <Form onSubmit={submit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </Form.Group>
              
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                    <p>Don't have an Account ?<span className='guest' onClick={()=>{setAccount(!Account)}}>Sign Up</span></p>

                  </Form>
                  </div>
                ):
                  (
                    
              <div className='center-form'>
              <h2>Sign Up</h2><br></br><br></br>
                    <Form onSubmit={submit}>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </Form.Group>
              
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </Form.Group>
              
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={signPassword}
                        onChange={(event) => setsignPassword(event.target.value)}
                      />
                    </Form.Group>
              
                    <Form.Group controlId="formBasicConfirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={signconfirmPassword}
                        onChange={(event) => setsignConfirmPassword(event.target.value)}
                      />
                    </Form.Group>
              
                    <Button variant="primary" type="submit">
                      Signup
                    </Button>
                    <p>Have an Account ?<span className='guest' onClick={()=>{setAccount(!Account)}}>Sign In</span></p>
                  </Form>
                  
                </div>

                  )
                  }
         
              </Col>
              
            </Row>
           </Container>


        </div>
    </div>
    
    
    
    </>
  )
}
export default Login;
