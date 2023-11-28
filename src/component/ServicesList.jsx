import React, { useState } from "react";
import "../scssstyles/service.scss";
import Sevice1img from "../images/notary1.jpeg";
import Sevice2img from "../images/notary2.jpg";
import Sevice3img from "../images/notary3.jpeg";
import Sevice4img from "../images/notary4.jpeg";
import Sevice5img from "../images/notary5.jpeg";
import Sevice6img from "../images/notary6.jpeg";
const ServicesList = () => {
  return (
    <div className="services-list">
      <div className="services-heading">
        <h4>Our Service</h4>
        <h2>Our Services includes but not limited to:</h2>
      </div>
      <div>
        <div className="service-item">
          <div>
            <img src={Sevice1img} />

            <h4>Prenuptial Agreements</h4>
            <div className="service-content">
              <article>
                Validate your prenuptial agreements with our notary services. We
                confirm the voluntary consent of all parties involved.
              </article>
            </div>
          </div>
          <div>
            <img src={Sevice2img} className="service-image-1" />
            <h4>Debt Settlement Agreements</h4>
            <div className="service-content">
              <article>
                Navigate debt settlement agreements confidently with our notary
                services. We help ensure the legality and validity of your
                agreements.
              </article>
            </div>
          </div>
          <div>
            <img src={Sevice3img} className="service-image-2" />
            <h4>Loan Document Signings</h4>
            <div className="service-content">
              <article>
                Navigate real estate transactions confidently with our notary
                assistance. We specialize in notarizing mortgage documents and
                related paperwork..
              </article>
            </div>
          </div>
          <div>
            <img src={Sevice4img} className="service-image-3" />
            <h4>Vehicle Title Transfers</h4>
            <div className="service-content">
              <article>
                Simplify the process of transferring vehicle titles by
                notarizing the necessary documents. Trust us for accurate and
                efficient notary services.
              </article>
            </div>
          </div>
          <div>
            <img src={Sevice5img} className="service-image-4" />
            <h4>Medical Documents</h4>
            <div className="service-content">
              <article>
                Ensure your medical directives and healthcare powers of attorney
                are legally sound with our professional notary services in the
                healthcare field.
              </article>
            </div>
          </div>
          <div>
            <img src={Sevice6img} className="service-image-5" />
            <h4>Affidavits</h4>
            <div className="service-content">
              <article>
                Need to swear to the truth of a statement? Our notaries are here
                to help with the proper notarization of affidavits for various
                purposes.
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
