import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../resources/components/Footer'
import Header from '../resources/components/Header'

export default function Start() {
  return (
    <>
    
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
