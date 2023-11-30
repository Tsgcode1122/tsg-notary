import React from "react";
import "../scssstyles/contactBox.scss";
import ContactForm from "./ContactForm";
import MapComponent from "./MapComponent";
import Contactusimg from "../images/notarycontact.jpeg";
import useZoomInAnimation from "../animation/useZoomInAnimation";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
import useRightToLeftSwipe from "../animation/useRightToLeftSwipe";
import useTopToBottomSwipe from "../animation/useTopToBottomSwipe";
import useBottomToTopSwipe from "../animation/useBottomToTopSwipe";
const Getin = () => {
  useLeftToRightSwipe(".Contact-context");
  useLeftToRightSwipe(".map");
  useZoomInAnimation(".map-img");

  return (
    <>
      <section className="Get-General">
        <div className="Contact-context">
          <h4>Contact us</h4>
          <h2>Get in Touch with TSG Notary Service</h2>
          <article>
            Get assistance with our notary services from the TSG Notary Service
            team! Whether scheduling, inquiring about services, or connecting,
            we're just a message away.Contact us through the form below or use
            the provided details. Thanks for considering TSG Notary Service; we
            look forward to providing you with seamless and certified notary
            services.
          </article>
        </div>
        <div className="Contact-form">
          <ContactForm />
        </div>
      </section>
      <section className="contact-map">
        <div className="map">
          <MapComponent />
        </div>
        <div className="map-img">
          <img src={Contactusimg} />
        </div>
      </section>
    </>
  );
};

export default Getin;
