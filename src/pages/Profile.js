import React from 'react'
import Footer from '../resources/components/Footer'
import Header from '../resources/components/Header'

export const Profile = (props) => {
  return (
    <>
  <Header user={props.user} setUser={props.setUser}/>
  
    <div>Profile</div>
  <Footer/>
    </>
    )
}
