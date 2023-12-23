import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import "../scssstyles/countdown.scss";
import { AiOutlineClose } from "react-icons/ai";

const SalePage = () => {
  const endDate = "2023-12-30T23:59:59";
  const [showCountdown, setShowCountdown] = useState(true);

  const handleCancel = () => {
    setShowCountdown(false);
  };

  return (
    <>
      <div className="offer-content">
        <div>
          {showCountdown && (
            <button onClick={handleCancel} className="cancel-button">
              <AiOutlineClose />
            </button>
          )}
          {showCountdown && (
            <CountdownTimer endDate={endDate} onCancel={handleCancel} />
          )}
        </div>
      </div>
    </>
  );
};

export default SalePage;
