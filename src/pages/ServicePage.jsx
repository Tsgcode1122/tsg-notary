import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ServicesList from "../component/ServicesList";
import ScrollToTopButton from "../component/ScrollToTopButton";
const ServicePage = () => {
  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="about-heading">
        <h1>Services We Offer</h1>
      </div>
      <ServicesList />

      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default ServicePage;
