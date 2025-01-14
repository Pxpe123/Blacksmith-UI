import React, { useRef } from "react";
import Welcome from "./Components/MainWelcome/Welcome";
import GettingStarted from "./Components/GettingStarted/GettingStarted";

const Home = () => {
  const gettingStartedRef = useRef(null);

  const scrollToGettingStarted = () => {
    if (gettingStartedRef.current) {
      gettingStartedRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-container">
      <Welcome scrollToGettingStarted={scrollToGettingStarted} />
      <div className="getting-started-container" ref={gettingStartedRef}>
        <GettingStarted />
      </div>
    </div>
  );
};

export default Home;
