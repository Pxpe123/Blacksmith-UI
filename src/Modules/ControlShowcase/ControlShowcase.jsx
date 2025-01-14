import React from "react";

import "./../../imports.css";
import "./../../Layout.css";
import "./ControlShowcase.css";

const ControlShowcase = () => {
  return (
    <div className="C-Container">
      <div className="C-Controls">
        <button className="C-Button">Go To Sell</button>
        <button className="C-Button">Scroll List</button>
        <button className="C-Button">Track Recipe</button>
        <button className="C-Button">Back</button>
      </div>
    </div>
  );
};

export default ControlShowcase;
