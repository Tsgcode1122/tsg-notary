import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "../scssstyles/contactBox.scss";
import useBottomToTopSwipe from "../animation/useBottomToTopSwipe";

const ContactBox = () => {
  useBottomToTopSwipe(".contact-info");
  return (
    <div className="contact-info">
      <div className="contact-box-1">
        <div className="contact-box">
          <div className="contact-icon">
            <FaPhone />
          </div>
          <p>123-456-7890</p>
        </div>
        <div className="contact-box">
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <p>info@example.com</p>
        </div>
        <div className="contact-box">
          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>
          <p>123 Main St, City</p>
        </div>
        <div className="contact-box">
          <div className="contact-icon">
            <FaClock />
          </div>
          <p>Mon-Fri: 9 AM - 5 PM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
