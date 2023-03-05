import React from 'react'
import { useAuth } from '../Authentication';
import { Navigate, useLocation } from 'react-router-dom';
export default function AuthRequired(props) {
    const auth=useAuth();
    const location=useLocation();
    if(auth.user===undefined || auth.user===null)
    {
        console.log("not logged");
        return <Navigate to='/login' state={{path:location.pathname}}></Navigate>
    }
  return props.children;
}
