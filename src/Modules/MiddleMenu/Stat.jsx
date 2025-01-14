import React from "react";
import "./../../imports.css";
import "./../../Layout.css";
import "./MiddleMenu.css";
import "./Item.css";
import "./Stat.css";

const Stat = ({ type, rarity, amount }) => {
  // Dynamically require the background image based on the rarity
  const backgroundImage = require(`./../../Assets/Stats/Stat-BG-${rarity}.png`);
  const HeartImage = require(`./../../Assets/Stats/Heart-${rarity}.png`);

  return (
    <div
      className="Stat-Container"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set the background image using inline style
    >
      <div className="Stat-Inner">
        <div className="Stat-Type">
          <img src={HeartImage} alt={type} />
        </div>
        <div className="Stat-Amount">{amount}</div>
      </div>
    </div>
  );
};

export default Stat;
