import React from "react";
import Item from "./Item";

import "./../../imports.css";
import "./../../Layout.css";
import "./MiddleMenu.css";

const MiddleMenu = ({ selectedItem }) => {
  return (
    <div className="MM-Container">
      <div className="Item-Container">
        {selectedItem ? <Item item={selectedItem} /> : <p></p>}
      </div>
      <div className="Craft-Container"></div>
    </div>
  );
};

export default MiddleMenu;
