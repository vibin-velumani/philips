import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/Login';
import { useState,useEffect } from 'react';
import Home from './pages/Home';
import { Product } from './pages/Product';
import { Profile } from './pages/Profile';
// import Admin from './resources/Admin_Pages/Admin'
import "bootstrap/dist/css/bootstrap.min.css";
// import AdminLogin from './resources/Admin_Pages/AdminLogin';
// import Home from './Resources/User_Pages/Home';
// import AdminPanel from './resources/Admin_Pages/AdminPanel';
// import AdminLoginRequired from './resources/Admin_Pages/AdminLoginRequired';
import { useAuth } from './Authentication';
import Authentication from './Authentication';
import AuthRequired from './pages/AuthRequired';
import Start from './pages/Start';
import PageNotFound from './pages/PageNotFound';
import Location from './pages/Loaction';
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
        <Route path='aboutus' element={<Location/>}/>

      </Route>
      <Route path='login' element={<Login/>}/>

          
           {/* <Route path='/admin' element={<AdminLoginRequired><Admin/></AdminLoginRequired>}>
                    <Route index element={<DashBoard/>}></Route>
                    <Route path="setquestion" element={<QuestionSet/>}></Route>

           </Route> */}
           
           {/* <Route path='admin/login' element={<AdminLogin/>}/> */}
        </Routes>
    </Authentication>
    </BrowserRouter>
  );
}

export default App;
