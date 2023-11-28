import React from "react";
import "../scssstyles/contactBox.scss";
import ContactForm from "./ContactForm";
import MapComponent from "./MapComponent";
import Contactusimg from "../images/notarycontact.jpeg";
const Getin = () => {
  return (
    <>
      <section className="Get-General">
        <div className="Contact-context">
          <h4>Contact us</h4>
          <h2>Get in Touch with TSG Notary Service</h2>
          <article>
            Have questions or need assistance with our notary services? We're
            here to help! Our dedicated team at TSG Notary Service is ready to
            assist you with any inquiries you may have. Whether you're looking
            to schedule a notary appointment, seeking information about our
            services, or simply want to connect, we're just a message away. Your
            satisfaction is our priority, and we aim to provide prompt and
            reliable support. Feel free to reach out to us through the contact
            form below, and we'll get back to you as soon as possible.
            Alternatively, you can use the provided contact details to connect
            with our team directly. Thank you for considering TSG Notary Service
            for your notary needs. We look forward to assisting you on your
            journey through seamless and certified notary services.
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
