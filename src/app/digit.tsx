import React from "react";
import "./digit.css";

function SplitDigit({ digit }) {
  return (
    <div className="digit-container">
      <div className="top-half">
        <span className="digit">{digit}</span>
      </div>
      <div className="bottom-half">
        <span className="digit">{digit}</span>
      </div>
    </div>
  );
}

export default SplitDigit;
