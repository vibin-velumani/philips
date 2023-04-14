import React from 'react';
import '../pages/Home';
import Footer from '../resources/components/Footer';
import Header from '../resources/components/Header';

export default function Location() {
  return (
    <div>
      <br />
      <center>
        <div className="about-us-container">
          <h2>About Us</h2>
          <p>
            At [Company Name], we're passionate about providing our customers
            with the best online shopping experience. We offer a wide range of
            products at competitive prices, and we're committed to excellent
            customer service.
          </p>
          <p>
            Our team of experts carefully curates our product selection to
            ensure that we only offer the highest quality items. We're always on
            the lookout for the latest trends and innovations, so you can be
            sure that you're getting the best products on the market.
          </p>
          <p>
            Thank you for choosing [Company Name] as your go-to destination for
            online shopping. We hope you enjoy browsing our selection and
            finding exactly what you're looking for.
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1956.4265408195783!2d77.57671044197956!3d11.272208312340867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d5b41933475%3A0xac5da54e4feaa5b2!2zQ1JZU1RBTCBQQVJUUyDvuI8g77iPIO-4jyDvuI8g77iPIO-4jw!5e0!3m2!1sen!2sin!4v1681442378001!5m2!1sen!2sin"
          width={600}
          height={450}
          style={{
            border: 'none',
            boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
            display: 'block',
            margin: '20px auto',
          }}
        ></iframe>
      </center>

      <style jsx>{`
        .about-us-container {
          background-color: #f5f5f5;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
          max-width: 800px;
          padding: 20px;
        }
      `}</style>
    </div>
  );
}
