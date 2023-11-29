import React from "react";
import {
  FaShieldAlt,
  FaUserCheck,
  FaHandshake,
  FaRegClock,
  FaBalanceScale,
} from "react-icons/fa";
import "../scssstyles/service.scss";
import Whyusimg from "../images/whyus.jpg";
import useZoomInAnimation from "../animation/useZoomInAnimation";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
import useRightToLeftSwipe from "../animation/useRightToLeftSwipe";
import useTopToBottomSwipe from "../animation/useTopToBottomSwipe";
import useBottomToTopSwipe from "../animation/useBottomToTopSwipe";
const WhyUs = () => {
  useBottomToTopSwipe(".why-us-1");
  useRightToLeftSwipe(".why-us-2");
  return (
    <>
      <section className="why-us">
        <div className="why-us-1">
          <h4>Why us</h4>
          <h2>
            Gratitude for Your Trust: Recognizing Your Choices, Honored You
            Chose Us.
          </h2>
          <article>
            Why choose us? We stand out through our unwavering dedication to
            accuracy, attention to detail, and a seamless notarization
            experience tailored to your needs.
          </article>
          {/* list */}
          <ul>
            {/* <li className="list-1">
              <FaShieldAlt className="why-us-icon" />
              <div>
                <h4>Secure and Confidential</h4>
                <article>
                  Our notary services are secure and conducted with the utmost
                  confidentiality, ensuring your privacy and peace of mind.
                </article>
              </div>
            </li> */}
            <li className="list-2">
              <FaUserCheck className="why-us-icon" />
              <div>
                <h4>Experienced Notaries</h4>
                <article>
                  Choose experienced notaries who are well-versed in legal
                  processes, providing you with professional and knowledgeable
                  services.
                </article>
              </div>
            </li>
            <li className="list-3">
              <FaHandshake className="why-us-icon" />
              <div>
                <h4>Reliable Services</h4>
                <article>
                  Count on us for reliable and trustworthy notary services. We
                  prioritize customer satisfaction and transparent transactions.
                </article>
              </div>
            </li>
            <li className="list-4">
              <FaRegClock className="why-us-icon" />
              <div>
                <h4>Quick Turnaround</h4>
                <article>
                  Need documents notarized quickly? We offer a quick turnaround,
                  ensuring your documents are processed efficiently and on time.
                </article>
              </div>
            </li>
            <li className="list-5">
              <FaBalanceScale className="why-us-icon" />
              <div>
                <h4>Legal Validity</h4>
                <article>
                  Ensure legal validity with our notary services. We understand
                  the importance of legal documentation and provide services
                  that stand up in court.
                </article>
              </div>
            </li>
          </ul>
        </div>
        <div className="why-us-2">
          <img src={Whyusimg} />
        </div>
      </section>
    </>
  );
};

export default WhyUs;
