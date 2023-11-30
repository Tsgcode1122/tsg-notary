import React, { useState, useEffect } from "react";
import "../scssstyles/countdown.scss";
const CountdownTimer = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(endDate) - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="sale-page">
      <div className="sale-head">
        <h2>This page is for sale!</h2>
        <p>Offer ends in:</p>
      </div>
      <div className="sale-count">
        <div>
          {" "}
          <span>{timeLeft.days}</span> Days{" "}
        </div>
        <div>
          <span>{timeLeft.hours}</span> Hours
        </div>{" "}
        <div>
          {" "}
          <span>{timeLeft.minutes}</span> Minutes
        </div>{" "}
        <div>
          <span>{timeLeft.seconds}</span> Seconds
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
