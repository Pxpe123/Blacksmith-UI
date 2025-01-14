import React, { useRef } from "react";

import "./Welcome.css";
import Video from "./../../../../Images/Video/Placeholder.mp4"; // Import your video file

import DailyChallenges from "./../DailyChallenges/DailyChallenges";

const Welcome = ({ scrollToGettingStarted }) => {
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      const currentTime = video.currentTime;
      const duration = video.duration;
      if (duration - currentTime <= 3) {
        // Trigger fade-out animation when 3 seconds before the end
        video.classList.add("fadeOut");
      }
    }
  };

  return (
    <div className="w-full h-full home-container">
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          className="video"
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
        >
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div className="welcome-container">
        <h1 className="title">Welcome to TPM Motors</h1>
        <p className="slogan">Empowering Environmental Action</p>
        <p className="paragraph">
          Sarah Johnson is an environmentalist and writer dedicated to promoting
          sustainability and conservation. With a background in Environmental
          Science and a passion for nature, she strives to inspire others to
          protect the planet through her writing and advocacy work.
        </p>
        <button className="button" onClick={scrollToGettingStarted}>
          Get Started
        </button>

        <div class="hexagon-container">
          <svg
            width="full"
            height="full"
            viewBox="0 0 354 206"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="1"
              d="M346.783 48.785L281.935 3.56689C280.006 2.22139 277.71 1.5 275.358 1.5H18.7949C9.68222 1.5 2.29492 8.88731 2.29492 18V148.208C2.29492 151.692 3.87453 154.988 6.59021 157.171L62.3161 201.963C64.3585 203.605 66.9004 204.5 69.5208 204.5H340.205C346.556 204.5 351.705 199.351 351.705 193V58.2181C351.705 54.4581 349.867 50.9356 346.783 48.785Z"
              stroke="var(--accent-color)"
              fill="var(--accent-color-opacity)"
              stroke-width="3"
            />
            <foreignObject width="100%" height="100%">
              <div xmlns="http://www.w3.org/1999/xhtml" class="w-full h-full">
                <DailyChallenges />
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
