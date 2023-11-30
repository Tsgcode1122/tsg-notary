import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "../scssstyles/faqs.scss";
import Faqsimg from "../images/notary-05.jpg";
import useZoomInAnimation from "../animation/useZoomInAnimation";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
import useRightToLeftSwipe from "../animation/useRightToLeftSwipe";
import useTopToBottomSwipe from "../animation/useTopToBottomSwipe";
import useBottomToTopSwipe from "../animation/useBottomToTopSwipe";
const Faqs = () => {
  useLeftToRightSwipe(".Faqs-heading");

  const Faqs = [
    // {
    //   id: 1,
    //   question: "What is a notary public?",
    //   answer:
    //     "A notary public is a person authorized to perform legal formalities, especially to draw up or certify contracts, deeds, and other documents for use in other jurisdictions.",
    // },
    // {
    //   id: 2,
    //   question: "How much does notary service cost?",
    //   answer:
    //     "Notary service costs can vary. It is recommended to check with the notary public directly for their fees. Many notaries charge a flat fee for each signature they notarize.",
    // },
    {
      id: 3,
      question: "What documents require notarization?",
      answer:
        "Common documents that require notarization include legal contracts, real estate deeds, wills, power of attorney forms, and affidavits. However, the specific requirements may vary by jurisdiction.",
    },
    {
      id: 4,
      question: "Is notarization the same as legalization?",
      answer:
        "No, notarization and legalization are different processes. Notarization involves verifying the identity of the signer and ensuring they are willingly signing the document. Legalization is a process where a document is authenticated for use in a foreign country.",
    },
    {
      id: 5,
      question: "Can any document be notarized?",
      answer:
        "Not all documents can be notarized. Some documents may require specific legal formalities or may be excluded based on legal regulations. It's best to consult with a notary to determine if a document is eligible for notarization.",
    },
    {
      id: 6,
      question: "Do I need an appointment for notary services?",
      answer:
        "While some notaries may accept walk-ins, it's advisable to schedule an appointment to ensure prompt service. It's recommended to contact the notary in advance and inquire about their availability.",
    },
    {
      id: 7,
      question: "What identification is required for notarization?",
      answer:
        "Typically, a government-issued photo ID, such as a driver's license or passport, is required for notarization. The ID should be current, and the name on the document must match the name on the ID.",
    },
    {
      id: 8,
      question: "Can I use a notary from another state?",
      answer:
        "Notaries are usually appointed by state governments, and their authority is limited to their state of commission. While some states may recognize out-of-state notaries, it's essential to check the specific requirements of the state where the document is being notarized.",
    },
  ];

  const [openFaqs, setOpenFaqs] = useState(null);

  const handleFaqsClick = (FaqsId) => {
    setOpenFaqs((prevOpenFaqs) => (prevOpenFaqs === FaqsId ? null : FaqsId));
  };

  return (
    <section className="Faqqs">
      <div className="Faqs-list">
        <div className="Faqs-heading">
          <h4> Faqs</h4>
          <article>
            Welcome to our Frequently Asked Questions (FAQs) section! We
            understand that navigating notary services can sometimes be
            confusing, and we're here to provide clarity. Below, you'll find
            answers to some common questions about our notary services. If you
            don't see your question here, feel free to contact us directly for
            personalized assistance.
          </article>
        </div>

        {Faqs.map((Faqs) => (
          <div key={Faqs.id} className="Faqs-item">
            <div
              className={`Faqs-header ${openFaqs === Faqs.id ? "open" : ""}`}
              onClick={() => handleFaqsClick(Faqs.id)}
            >
              <h4>
                {Faqs.question}{" "}
                {openFaqs === Faqs.id ? <FaAngleUp /> : <FaAngleDown />}
              </h4>
            </div>
            <div
              className={`Faqs-content ${openFaqs === Faqs.id ? "open" : ""}`}
            >
              <article>{Faqs.answer}</article>
            </div>
          </div>
        ))}
      </div>
      <div className="Faqs-img">
        <img src={Faqsimg} />
      </div>
    </section>
  );
};

export default Faqs;
