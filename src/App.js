import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/Login';
import { useState,useEffect } from 'react';
import Home from './pages/Home';
function App() {
  const[user,setUser]=useState('');
 
  useEffect(() => {
    const items = localStorage.getItem('id');
    if (items) {
      console.log(items);
     setUser(items);
    }
  }, []);
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home user={user} setUser={setUser}/>}></Route>
      
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
