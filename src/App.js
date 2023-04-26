import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/Login';
import { useState,useEffect } from 'react';
import Home from './pages/Home';
import Profile  from './pages/Profile';
import "bootstrap/dist/css/bootstrap.min.css";
// import 'reactjs-popup/dist/index.css';
import { useAuth } from './Authentication';
import Authentication from './Authentication';
import AuthRequired from './pages/AuthRequired';
import Start from './pages/Start';
import Location from './pages/Loaction';
import PrivacyPolicy from'./pages/PrivacyPolicy';
import TermAndContions from'./pages/TermAndContions';
import ContactUs from './pages/ContactUs';
import AdminLoginRequired from './resources/Admin_Pages/AdminLoginRequired'
import Admin from './resources/Admin_Pages/Admin'
import DashBoard from './resources/Admin_Pages/DashBoard'
import QuestionSet from './resources/Admin_Pages/QuestionSet'
import AdminLogin from './resources/Admin_Pages/AdminLogin'
import UpdateProduct from './resources/Admin_Pages/UpdateProduct';
import AddOffers from './resources/Admin_Pages/AddOffers';
import { Products } from './resources/components/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Offers from './pages/Offers';
import SingleProduct from './resources/Single_page/SingleProduct';
import AddStaff from './resources/Admin_Pages/AddStaff'
// import SummaryPage from './pages/Carts';
function App() {
  const auth=useAuth(); 
  return (
    <BrowserRouter>
    <Authentication>
    <Routes>
      <Route path='/' element={<Start />}>
        <Route index element={<Home/>}></Route>
        <Route path="products" element={<Products/>}></Route>
        <Route path='profile' element={<AuthRequired><Profile/></AuthRequired>}/>
        <Route path='cart' element={<Cart />}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='offers' element={<Offers/>}/>
        <Route path='aboutus' element={<Location/>}/>
        <Route path='ContactUs' element={<ContactUs/>}/> 
        <Route path='PrivacyPolicy' element={<PrivacyPolicy/>}/>
        <Route path='TermAndContions' element={<TermAndContions/>}/>
        <Route path='singleproduct' element={<SingleProduct/>}/>
        
      </Route>
      <Route path='login' element={<Login/>}/>

      <Route path='/admin' element={<AdminLoginRequired><Admin/></AdminLoginRequired>}>
                    <Route index element={<DashBoard/>}></Route>
                    <Route path="addproduct" element={<QuestionSet/>}></Route>
                    <Route path="updateproduct" element={<UpdateProduct/>}></Route>
                    {/* <Route path="addoffers" element={<AddOffers/>}></Route> */}
                    <Route path="addstaff" element={<AddStaff/>}></Route>
           </Route>
           <Route path='adminlogin' element={<AdminLogin/>}/>
           
        </Routes>
    </Authentication>
    </BrowserRouter>
  );
}

export default App;
 