import React, { useState } from "react";
import "../scssstyles/footer.scss";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Outlet, Link, useNavigate } from "react-router-dom";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(`Subscribed with email: ${email}`);

    const formSpreeUrl = "https://formspree.io/f/xnqkdolz";

    try {
      const response = await fetch(formSpreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <section className="footer">
        <div className="footer-main">
          <div className="log-art">
            <div className="nav-logo">
              <Link to="/">
                <h4>Tsg-Notary</h4>
              </Link>
            </div>
            <article>
              In a world where transactions and agreements are increasingly
              conducted digitally, the importance of notarization cannot be
              overstated. A notary public plays a crucial role in verifying the
              authenticity of documents, adding an extra layer of trust and
              legality to your important paperwork.
            </article>
          </div>
          <div className="mix-two">
            <div className="footer-column">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <div className="f-icon">
                    <FaPhone />
                  </div>
                  <article>123-456-7890</article>
                </li>
                <li>
                  <div className="f-icon">
                    <FaEnvelope />
                  </div>
                  <article>info@example.com</article>
                </li>
                <li>
                  {" "}
                  <div className="f-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <article>123 Main St, City</article>
                </li>
                <li>
                  <div className="f-icon">
                    <FaClock />
                  </div>
                  <article>Mon-Fri: 9 AM - 5 PM</article>
                </li>
              </ul>
            </div>
            <div className="join-two">
              <div className="footer-column-2">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
              <div className="footer-4">
                <h4>Our Newsletter</h4>
                <div>
                  <article>
                    Subscribe To Our Email For Latest News & Updates
                  </article>

                  {isSubmitted ? (
                    <div className="success-message">
                      Thank you for subscribing, Tsg cares!
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="form-4"
                      action="https://formspree.io/f/xnqkdolz"
                      method="POST"
                    >
                      <div className="input-container">
                        <input
                          type="email"
                          className="subscribe-input"
                          placeholder="Enter your email"
                          value={email}
                          onChange={handleInputChange}
                          required
                        />
                        <input type="hidden" name="_replyto" value={email} />
                        <button type="submit" className="subscribe-button">
                          Subscribe
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <article>
            &copy; 2023 TSG Notary Service. All rights reserved.
          </article>
          <h4>
            <a href="http://softwebsitedesigns.com/">
              Developed and designed by Tsg
            </a>
          </h4>
        </div>
      </section>
    </>
  );
};

export default Footer;
