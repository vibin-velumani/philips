import React from 'react'
import '../pages/Home'
import Header from "../resources/components/Header";
import Footer from "../resources/components/Footer";
import { Container } from "react-bootstrap";




const ContactUs =()=>{
    return (
        <>
        <Header/>
        <Container>
        <div>
            <h1> Contact form  </h1>
            <form>
                <label>name</label>
                <input type="text" name="name"/>
                
                <label> Email</label>
                <input type="email" name="user_email"/>

                <label>Message</label>
                <textarea name="message" rows="4"/> 

            </form>
        </div>
        </Container>
        <Footer/>
        </>
        
    );
};

export default ContactUs;  