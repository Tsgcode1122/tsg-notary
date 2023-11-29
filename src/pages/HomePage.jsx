import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import "../styles.scss";
import "../scssstyles/home.scss";
import WhyUs from "../component/WhyUs";
import Whychoose from "../component/Whychoose";
import ServicesList from "../component/ServicesList";
import WhoAre from "../component/WhoAre";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Percentage from "../component/Percentage";
import Faqs from "../component/Faqs";
import Getin from "../component/Getin";
import Footer from "../component/Footer";
import ScrollToTopButton from "../component/ScrollToTopButton";
import ContactBox from "../component/ContactBox";

const HomePage = () => {
  const initialText = "Certified Notary Services for Every Document";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      const targetText = textIndex === 0 ? "Anywhere" : "Anytime";

      if (isDeleting) {
        setDisplayedText((prevText) => prevText.slice(0, -1));
      } else {
        setDisplayedText((prevText) =>
          targetText.slice(0, prevText.length + 1),
        );
      }

      if (!isDeleting && displayedText === targetText) {
        setIsDeleting(true);
      }

      if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % 2);
      }
    }, 350);
    return () => clearInterval(textInterval);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <>
      <Navbar />
      <section className="home" id="home-page">
        <div className="text-container">
          <span className="text-span">Tsg Notary Service</span>
          <h1>
            Certified Notary Services for Every Document{" "}
            <span>{displayedText}</span>
          </h1>
          <article>
            Providing reliable notary services to safeguard your legal
            transactions.
          </article>
          <div className="home-cta">
            <Link to="/ContactPage">
              {" "}
              <button>Get Started Today</button>
            </Link>
            <Link to="/ContactPage">
              <button>Schedule a Notary Appointment</button>
            </Link>
          </div>
        </div>
      </section>

      <div className="Cont-Design">
        <ContactBox />
      </div>

      <WhoAre />
      <Whychoose />
      <ServicesList />
      <WhyUs />
      <Percentage />
      <Faqs />
      <Getin />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default HomePage;
