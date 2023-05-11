import React, { useContext, useState } from 'react'
import axios from './Api/axios';
import { Navigate, useNavigate } from 'react-router-dom';
export const userStatus=React.createContext();
export default function Authentication(props) {
  const navigate=useNavigate();
    const [user,setUser]=useState(localStorage.getItem('details'));
    const [size,setSize]=useState(localStorage.getItem('size'));

    const login=(data)=>{
        setUser(data);
        setSize(data.cart.length)
        localStorage.setItem('details',JSON.stringify(data));
        localStorage.setItem('size',data.cart.length);
        console.log(data);
    }
    const logout=async(e)=>{
      e.preventDefault();
        await axios.post('/auth/logout').then((res)=>{ setUser(null);localStorage.removeItem('details');localStorage.setItem('size',Number(0)); navigate("/")}).catch((err)=>{console.log(err)})
       
    }
  return (
    <>
          <userStatus.Provider value={{user,login,logout,size,setSize}}>
            {props.children}
          </userStatus.Provider>
    
    </>
  )
}
export const useAuth=()=>{return useContext(userStatus)};