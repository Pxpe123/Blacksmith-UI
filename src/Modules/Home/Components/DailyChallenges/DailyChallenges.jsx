import React from "react";
import "./DailyChallenges.css"; // Import your CSS file for styling
import carImage from "./carImage.jpg"; // Import your car image

import DailyChallenge from "./Components/DailyChallengeTemplate/DailyChallengeTemplate";

const DailyChallenges = ({ isLoggedIn }) => {
  const formatDate = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0"); // Get day and pad with leading zero if needed
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Get month (zero-based) and pad with leading zero if needed
    const year = String(currentDate.getFullYear()).slice(-2); // Get last two digits of the year
    return `${day}/${month}/${year}`; // Return formatted date
  };

  const carName = "BMW M4 Comp";

  return (
    <div
      class0Name={`daily-challenges-container ${isLoggedIn ? "" : "overlay"}`}
    >
      {isLoggedIn && (
        <div className="overlay-content">
          <h1>Login / Signup to Complete Challenges</h1>
          <div className="button-container">
            <button className="login-button">Login</button>
            <button className="signup-button">Signup</button>
          </div>
        </div>
      )}
      <h1 className="daily-challenges-title">Daily Challenges</h1>
      <h2 className="daily-challed-Reward">Reward</h2>
      <h2 className="daily-challed-Challenge">Challenge</h2>
      <div className="prize-vehicle">
        <img src={carImage} alt="Car" className="car-image" />
        <div className="car-details">
          <p className="car-details-text">{carName}</p>
          <p className="car-details-text">{formatDate()}</p>
        </div>
      </div>
      <div className="challenge-list">
        <div className="challenge-container">
          <DailyChallenge index={1} />
        </div>
        <div className="challenge-container">
          <DailyChallenge index={2} />
        </div>
        <div className="challenge-container">
          <DailyChallenge index={3} />
        </div>
      </div>
    </div>
  );
};

export default DailyChallenges;
