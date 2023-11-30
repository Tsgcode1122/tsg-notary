import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Getin from "../component/Getin";
import ContactBox from "../component/ContactBox";

const ContactPage = () => {
  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  }, []);

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
