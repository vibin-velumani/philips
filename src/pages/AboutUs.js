import React from 'react'
import '../pages/Home'
import Header from "../resources/components/Header";
import Footer from "../resources/components/Footer";
import { Container } from "react-bootstrap";




const About =()=>{
    return (
        <>
        <Header/>
        <div className="about-us-container">
      <h2>About Us</h2>
      <p>At [Company Name], we're passionate about providing our customers with the best online shopping experience. We offer a wide range of products at competitive prices, and we're committed to excellent customer service.</p>
      <p>Our team of experts carefully curates our product selection to ensure that we only offer the highest quality items. We're always on the lookout for the latest trends and innovations, so you can be sure that you're getting the best products on the market.</p>
      <p>Thank you for choosing [Company Name] as your go-to destination for online shopping. We hope you enjoy browsing our selection and finding exactly what you're looking for.</p>
    </div>
        <Footer/>
        </>
        
    );
};

export default About;  