import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/Login';
import { useState,useEffect } from 'react';
import Home from './pages/Home';
import { Product } from './pages/Product';
import { Profile } from './pages/Profile';
import { Admin } from './pages/Admin';
import { useAuth } from './Authentication';
import Authentication from './Authentication';
import AuthRequired from './pages/AuthRequired';
import Start from './pages/Start';
import PageNotFound from './pages/PageNotFound';
function App() {
  const auth=useAuth();
  return (
    <BrowserRouter>
    <Authentication>
    <Routes>
      <Route path='/' element={<Start />}>
        {/* <Route path='product' element={<Product />}/> */}
        <Route index element={<Home/>}></Route>
        <Route path='profile' element={<AuthRequired><Profile/></AuthRequired>}/>
        <Route path='login' element={<Login />}/>

      </Route>
      <Route path='*' element={<PageNotFound/>}/>

      {/* <Route path='/admin' element={<Admin/>}></Route> */}
    </Routes>
    </Authentication>
    </BrowserRouter>
  );
}

export default App;
