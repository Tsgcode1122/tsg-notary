import React, { useEffect } from "react";
import "../scssstyles/service.scss";
import Percentimg from "../images/percent.png";
import useZoomInAnimation from "../animation/useZoomInAnimation";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
import useRightToLeftSwipe from "../animation/useRightToLeftSwipe";
import useTopToBottomSwipe from "../animation/useTopToBottomSwipe";
import useBottomToTopSwipe from "../animation/useBottomToTopSwipe";
const Percentage = () => {
  useLeftToRightSwipe(".percentimgs");
  useEffect(() => {
    const percentageContainers = document.querySelectorAll(".progress-bar");

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("progress-bar");
        } else {
          entry.target.classList.remove("progress-bar");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    percentageContainers.forEach((container) => {
      observer.observe(container);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className="Percentage">
        <div>
          <div className="percentage-container">
            <div className="percent-heading">
              <h4>Transparent and Fair Pricing</h4>
              <h4>80%</h4>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-1">
                <div className="color-line"></div>
                <div className="end-box"></div>
              </div>
            </div>
          </div>
          <div className="percentage-container">
            <div className="percent-heading">
              <h4>Technology Integration</h4>
              <h4>90%</h4>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-2">
                <div className="color-line"></div>
                <div className="end-box"></div>
              </div>
            </div>
          </div>
          <div className="percentage-container">
            <div className="percent-heading">
              <h4>Legal Standards </h4>
              <h4>95%</h4>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-3">
                <div className="color-line"></div>
                <div className="end-box"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Percentimg} className="percentimgs" />
        </div>
      </section>
    </>
  );
};

export default Percentage;
