import React from "react";
import whoareimg from "../images/whoweare.jpg";
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
  useLeftToRightSwipe(".who-we-context");
  useRightToLeftSwipe(".service-area-context");
  useZoomInAnimation(".Exception-context");
  return (
    <>
      <section className="who-we">
        <div className="who-we-context">
          <h4>About Us</h4>
          <h2>Your Trusted Notary Experts</h2>
          <article>
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
            Your Trusted Notary Across Multiple Locations. Offering reliable
            notarial services in six key areas, our expert team ensures seamless
            and professional document notarization. From legal transactions to
            essential paperwork, we bring our services to your doorstep,
            providing accessibility and convenience tailored to your specific
            locations.
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
            We don't just commit to excellent service – we live it. Our
            unwavering policy ensures that every interaction is met with the
            highest standard of professionalism, reliability, and dedication.
            Experience notary services where excellence is not just promised;
            it's our everyday commitment to you.
          </article>
          <button>Contact Us Today!!!</button>
        </div>
      </section>
    </>
  );
};

export default WhoAre;
