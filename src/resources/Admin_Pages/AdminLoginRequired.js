import React from 'react'
import { useAuth } from '../../Authentication';
import { Navigate, useLocation } from 'react-router-dom';
export default function AuthLoginRequired(props) {
    const auth=useAuth();
    const location=useLocation();
    if(auth.user===undefined || auth.user===null)
    {
        console.log("Not Logged : "+auth.user);
        return <Navigate to='/adminlogin' state={{path:location.pathname}}></Navigate>
    }
  return props.children;
}
