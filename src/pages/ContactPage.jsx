import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Getin from "../component/Getin";
import ContactBox from "../component/Contactbox";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-heading">
        <h1>Get in Touch With Us</h1>
      </div>
      <ContactBox />
      <Getin />
      <Footer />
    </>
  );
};

export default ContactPage;
