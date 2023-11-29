import React, { useState, useEffect } from "react";
import "../scssstyles/about.scss";
const Whychoose = () => {
  const [counts, setCounts] = useState({
    supplies: 30,
    customers: 0,
    products: 0,
    partners: 0,
  });

  const targets = {
    supplies: 525,
    customers: 2000,
    products: 5,
    partners: 100,
  };

  useEffect(() => {
    const section = document.querySelector("#why-choose-1");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Object.keys(counts).forEach((key) => {
            const targetNumber = targets[key];

            if (counts[key] < targetNumber) {
              const intervalId = setInterval(() => {
                setCounts((prevCounts) => {
                  const newCounts = { ...prevCounts };
                  newCounts[key] += 1;
                  return newCounts[key] <= targetNumber
                    ? newCounts
                    : prevCounts;
                });
              }, 200);

              return () => clearInterval(intervalId);
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(section);

    return () => observer.disconnect();
  }, [counts, targets]);

  return (
    <>
      <div id="why-choose-section" className="why-choose">
        <div className="why-choose-1" id="why-choose-1">
          <h2>{counts.supplies.toLocaleString()}+</h2>
          <h4>Happy client</h4>
        </div>
        <div className="why-choose-1">
          <h2>{counts.customers.toLocaleString()}+</h2>
          <h4>Project done</h4>
        </div>
        <div className="why-choose-1">
          <h2>{counts.products}</h2>
          <h4>Years of Experience</h4>
        </div>
        <div className="why-choose-1">
          <h2>{counts.partners}%</h2>
          <h4>Satisfaction</h4>
        </div>
      </div>
    </>
  );
};

export default Whychoose;
