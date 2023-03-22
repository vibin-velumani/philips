import React, { useRef } from "react";
// import '../resources/css/ContactUs.css';
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Header from "../resources/components/Header";
import Footer from "../resources/components/Footer";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
 // import the CSS file

const Contact = () => {
  const navigate=useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d7xdubm",
        "template_6ft353j",
        form.current,
        "88yVLAKxvlPmsN5L0"
      )
      .then(
        (result) => {
          setTimeout(()=>{navigate('/aboutus');},5000);
          toast.success("Message sent");
          
        },
        (error) => {
          toast.error("Something went wrong");
        }
      );
  };

  return (
    <>
      <Header />
      <center>
        <ToastContainer/>
      <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
    </center>
      <Footer />
    </>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 3rem;
        font-size: 16px;
        font-weight: 600;
  color: rgb(9, 6, 6);
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      // background: rgb(249, 105, 14);
      color: white;
      border: none;
    background-color: #283446;
  color: #fff;
  border-radius: 5px;
  
}

    }

  }
`;
