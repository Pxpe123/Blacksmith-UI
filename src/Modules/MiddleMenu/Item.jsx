import React from "react";
import "./../../imports.css";
import "./../../Layout.css";
import "./MiddleMenu.css";
import ItemImage2 from "./../../Assets/Item-Images/LeatherGloves.png";

import "./Item.css";
import Stat from "./Stat";

const Item = ({ item }) => {
  // Ensure stats is always an array, even if it's a single object
  const stats = Array.isArray(item.Stats)
    ? item.Stats
    : Object.entries(item.Stats).map(([type, amount]) => ({ type, amount }));

  // Generate dynamic grid classes based on the number of stats
  const gridClass = `Stats-Grid-${stats.length}`;

  // Dynamically set the image for the rarity
  const rarityImage = `${item.Rarity}Image`; // assuming item.Rarity contains "Uncommon", "Epic", etc.
  const rarityImageSrc = require(`./../../Assets/Item-Borders/Item-${item.Rarity}.png`); // Dynamically load the image

  return (
    <div className="Item-Inner-Container">
      <div className="Item-Header">{item.Name}</div>
      <div className={`Item-Type ${item.Rarity}-Rarity`}>
        <span>{item.Type}</span>
      </div>
      <div className="Item-Image">
        <img
          src={rarityImageSrc}
          alt={`${item.Rarity} Item`}
          className="Item-Border"
        />
        <img src={ItemImage2} alt={item.Name} className="Item-Inner-Image" />
      </div>
      <div className="Item-Description">{item.Description}</div>
      <div className={`Item-Stats ${gridClass}`}>
        {stats.map((stat, index) => (
          <Stat
            key={index}
            type={stat.type}
            rarity={item.Rarity}
            amount={stat.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default Item;
