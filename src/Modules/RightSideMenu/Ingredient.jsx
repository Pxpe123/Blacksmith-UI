import React from "react";
import "./../../imports.css";
import "./../../Layout.css";
import "./RightSideMenu.css";

const Ingredient = ({ image, quantity, name }) => {
  return (
    <div className="Ingredient">
      <p className="Ingredient-Quantity">{quantity}</p>
      <p className="Ingredient-Name">{name}</p>
    </div>
  );
};

export default Ingredient;
