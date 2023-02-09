import '../resources/css/Login.css';
import { Row,Col,Container } from 'react-bootstrap';
import { useState } from 'react';
import Logo from '../resources/images/logo.png';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [Account,setAccount]=useState(true);
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate = useNavigate();
    return (
    <>
    <div className='container-center'>
        <div className='container-center-wrapper'>
           <Container>
            <Row>
            
            <Col md={8} xs={8} sm={6} >

            </Col>
            
              <Col md={4} xs={4} sm={6} >
              
              <div className='center-form'>
                  <h2>Login</h2><br></br><br></br>
                  {Account?
                  (
                  <form>
                    <label>Username :</label>{"  "}
                    <input type="text"  required autoFocus value={email} onChange={e => setEmail(e.target.value)}></input><br></br><br></br>
                    <label>Password :</label>{"  "}
                    <input type="password" required autoFocus value={password} onChange={e => setPassword(e.target.value)}></input><br></br><br></br>
                    <button className="btn btn-primary" onClick={()=>{localStorage.setItem('id',"subash")}}> Sign in</button><br></br><br></br>
                    <p>Don't have an account ?<span onClick={() => setAccount(!Account)}> Sign up</span></p>
                  </form>):
                  (
                    <form>
                        <label>Username :</label>{"  "}
                    <input type="text"  required autoFocus value={email} onChange={e => setEmail(e.target.value)}></input><br></br><br></br>
                    <label>Password :</label>{"  "}
                    <input type="password" required autoFocus value={password} onChange={e => setPassword(e.target.value)}></input><br></br><br></br>
                    <button className="btn btn-primary"> Sign Up</button><br></br><br></br>
                    <p>Have an account ?<span onClick={() => setAccount(!Account)}>Sign in</span></p>

                    </form>
                  )
                  }
                  <p>Continue as guest <span className='guest' onClick={()=>{navigate('/')}}>Click here</span></p>
                </div>
         
              </Col>
              
            </Row>
           </Container>


        </div>
    </div>
    
    
    
    </>
  )
}
export default Login;
