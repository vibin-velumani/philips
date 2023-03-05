import React, { useContext, useState } from 'react'
import axios from './Api/axios';
export const userStatus=React.createContext();
export default function Authentication(props) {
    const [user,setUser]=useState(localStorage.getItem('details'));
    const login=(data)=>{
        setUser(data);
        localStorage.setItem('details',data);
    }
    const logout=async(e)=>{
      e.preventDefault();
        await axios.post('/auth/logout').then((res)=>{ setUser(null);localStorage.removeItem('details');}).catch((err)=>{console.log(err)})
       
    }
  return (
    <>
          <userStatus.Provider value={{user,login,logout}}>
            {props.children}
          </userStatus.Provider>
    
    </>
  )
}
export const useAuth=()=>{return useContext(userStatus)};