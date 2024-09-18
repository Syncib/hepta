import React from "react";
import Navbar from "../../components/Navbar";
import "../../components/ContactForm";
import "./Contact.css";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import HappyCustomers from "../../components/HappyCustomers";
const Contact = () => {
  return (
    <>
      <div className="contact-hero">
        <Navbar />
        <div className="contact-hero-text">
          <h1 className="abril-fatface-600 contact-hero-heading">Contact</h1>
          <p className="contact-hero-subtext mukta-mahee-regular ">
            A free template by <span className="colorlib">Colorlib</span>.
            Download and share!
          </p>
        </div>
      </div>
      <div className="form-area">
        <ContactForm />
        <div className="form-details">
          <h1>ADDRESS:</h1>
          <p>98 West 21th Street, Suite</p>
          <p>721 New York NY 10016</p>
          <h1>PHONE:</h1>
          <p>(+1) 435 3533</p>
          <h1>Email:</h1>
          <p>info@yourdomain.com</p>
        </div>
      </div>
      <HappyCustomers/>
      <Footer/>
    </>
  );
};

export default Contact;
