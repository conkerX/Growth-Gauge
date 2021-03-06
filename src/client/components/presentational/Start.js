import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="start-container">
      <div className="start-text-container">
        <h5 className="left-text-header">
          <span className="left-text-header-underline">START</span>
        </h5>
        <p className="left-text-paragraph">
          Growth is an interative process that requires fundemental needs,
          awareness, and will. We all have the power to take control and take a
          step in the right direction. Take your step today!
        </p>
        <div className="start-button-container">
          <Link to="/questions" className="start-button-a-tag">
            <button className="start-button">Step 1</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
