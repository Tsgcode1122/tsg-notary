import React from "react";
import "../scssstyles/about.scss";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import WhoAre from "../component/WhoAre";
import Whychoose from "../component/Whychoose";
import Percentage from "../component/Percentage";
import ScrollToTopButton from "../component/ScrollToTopButton";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-heading">
        <h1>About our Notary</h1>
      </div>
      <WhoAre />
      <Whychoose />
      <Percentage />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default AboutPage;
