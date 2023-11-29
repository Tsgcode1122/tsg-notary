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
  useRightToLeftSwipe(".map-img");

  return (
    <>
      <section className="Get-General">
        <div className="Contact-context">
          <h4>Contact us</h4>
          <h2>Get in Touch with TSG Notary Service</h2>
          <article>
            Need help with our notary services? The TSG Notary Service team is
            here for you! Whether you're scheduling an appointment, have
            questions about our services, or just want to connect, we're a
            message away. Your satisfaction is our priority, and we strive to
            offer prompt and reliable support. Reach out via the contact form
            below, or use the provided contact details to connect directly.
            Thank you for considering TSG Notary Service for your needs; we look
            forward to providing you with seamless and certified notary
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
