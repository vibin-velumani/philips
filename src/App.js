import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/Login';
import { useState,useEffect } from 'react';
import Home from './pages/Home';
import { Product } from './pages/Product';
import { Profile } from './pages/Profile';
import "bootstrap/dist/css/bootstrap.min.css";
import 'reactjs-popup/dist/index.css';
import { useAuth } from './Authentication';
import Authentication from './Authentication';
import AuthRequired from './pages/AuthRequired';
import Start from './pages/Start';
import Location from './pages/Loaction';
import ContactUs from './pages/ContactUs';
import AdminLoginRequired from './resources/Admin_Pages/AdminLoginRequired'
import Admin from './resources/Admin_Pages/Admin'
import DashBoard from './resources/Admin_Pages/DashBoard'
import QuestionSet from './resources/Admin_Pages/QuestionSet'
import AdminLogin from './resources/Admin_Pages/AdminLogin'
import UpdateProduct from './resources/Admin_Pages/UpdateProduct';
import Addstaff from './resources/Admin_Pages/Addstaff';
import { Products } from './resources/components/Products';
import 'react-toastify/dist/ReactToastify.css';
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
        <Route path='products' element={<Products/>}></Route>
        <Route path='login' element={<Login />}/>
        <Route path='aboutus' element={<Location/>}/>
        <Route path='ContactUs' element={<ContactUs/>}/> 
      </Route>
      <Route path='login' element={<Login/>}/>

      <Route path='/admin' element={<AdminLoginRequired><Admin/></AdminLoginRequired>}>
                    <Route index element={<DashBoard/>}></Route>
                    <Route path="addproduct" element={<QuestionSet/>}></Route>
                    <Route path="updateproduct" element={<UpdateProduct/>}></Route>
                    <Route path="admincontrol" element={<Addstaff/>}></Route>


                    
           </Route>
           <Route path='adminlogin' element={<AdminLogin/>}/>
           
           {/* <Route path='admin/login' element={<AdminLogin/>}/> */}
        </Routes>
    </Authentication>
    </BrowserRouter>
  );
}

export default App;
 