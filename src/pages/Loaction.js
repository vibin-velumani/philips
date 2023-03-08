import React from 'react'
import '../pages/Home'
import Footer from '../resources/components/Footer'
import Header from '../resources/components/Header'
export default function Location() {
  return (
    <div>
<Header/>
<br/>
     <div>
      <h1>About Toolmart Online</h1>
     
    </div>
<center>
   <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7825.709743464749!2d77.5746537879322!3d11.27207680000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d5b41933475%3A0xac5da54e4feaa5b2!2zQ1JZU1RBTCBQQVJUUyDvuI8g77iPIO-4jyDvuI8g77iPIO-4jw!5e0!3m2!1sen!2sin!4v1678032447228!5m2!1sen!2sin" width={600} height={450} style={{border:"0"}}   ></iframe>
   </center>
<Footer/>


    </div>
  )
}

