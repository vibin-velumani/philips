import React, { useContext, useState } from 'react'
export const userStatus=React.createContext();
export default function Authentication(props) {
    const [user,setUser]=useState(null);
    const login=(name)=>{
        setUser(name);
    }
    const logout=()=>{
        setUser(null);
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