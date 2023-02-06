import React from 'react'
import Header from "../resources/components/Header";
import Footer from "../resources/components/Footer";
export default function Home(props) {
  return (
    <>
    <Header user={props.user} setUser={props.setUser}/>
    <main>
       <div>Home</div>
    </main>
    <Footer/>
    </>
  )
}
