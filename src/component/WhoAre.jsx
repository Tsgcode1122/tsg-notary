import React from "react";
import whoareimg from "../images/whoweare.jpg";
import { Outlet, Link, useNavigate } from "react-router-dom";
import serviceareaimg from "../images/servicearea.jpg";
import Exceptionimg from "../images/weight.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../scssstyles/about.scss";
import useZoomInAnimation from "../animation/useZoomInAnimation";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
import useRightToLeftSwipe from "../animation/useRightToLeftSwipe";
import useTopToBottomSwipe from "../animation/useTopToBottomSwipe";
import useBottomToTopSwipe from "../animation/useBottomToTopSwipe";

const WhoAre = () => {
  useLeftToRightSwipe(".swipy");
  useZoomInAnimation(".service-area");
  useZoomInAnimation(".Exception-context");
  return (
    <>
      <section className="who-we">
        <div className="who-we-context">
          <h4>About Us</h4>
          <h2>Your Trusted Notary Experts</h2>
          <article className="swipy">
            Discover precision in notarization with Reliable Notary Services.
            Our seasoned team ensures the legality and authenticity of your
            vital transactions. Simplify your notarization process with us –
            your trusted partners in professionalism and efficiency.
          </article>
        </div>
        <div className="who-we-img">
          <img src={whoareimg} />
        </div>
      </section>
      <section className="service-area">
        <div className="service-area-context">
          <h4>Service area</h4>
          <h2>We're here to assist you. That's our business.</h2>
          <article>
            Your Trusted Notary, Providing Reliable Services Across Six Key
            Areas. Our Expert Team Ensures Seamless and Professional Document
            Notarization, Tailored to Your Specific Locations.
          </article>
          <div className="service-area-list">
            <div className="contact-icon">
              <FaMapMarkerAlt />
              <p>123 Main St, City</p>
            </div>
            <div className="contact-icon">
              <FaMapMarkerAlt />
              <p>123 Main St, City</p>
            </div>
            <div className="contact-icon">
              <FaMapMarkerAlt />
              <p>123 Main St, City</p>
            </div>
            <div className="contact-icon">
              <FaMapMarkerAlt />
              <p>123 Main St, City</p>
            </div>
            <div className="contact-icon">
              <FaMapMarkerAlt />
              <p>123 Main St, City</p>
            </div>
            <div className="contact-icon">
              <FaMapMarkerAlt />
              <p>123 Main St, City</p>
            </div>
          </div>
        </div>
        <div className="service-area-img">
          <img src={serviceareaimg} />
        </div>
      </section>
      <section className="Exception">
        <div className="Exception-img">
          <img src={Exceptionimg} />
        </div>
        <div className="Exception-context">
          <h2>
            Where Exceptional Service Isn't Just a Promise; It's Our Standard.
          </h2>
          <article>
            We don't just promise excellent service – we live it. Our unwavering
            policy guarantees every interaction meets the highest standards of
            professionalism, reliability, and dedication. Experience notary
            services where excellence isn't just promised; it's our daily
            commitment to you.
          </article>
          <Link to="/ContactPage">
            <button>Contact Us Today!!!</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default WhoAre;
