import React from "react";
import Ingredient from "./Ingredient"; // Import the Ingredient component

import "./../../imports.css";
import "./../../Layout.css";
import "./RightSideMenu.css";

const RightSideMenu = ({ selectedItem }) => {
  // Convert Recipe object into an array of ingredients
  const recipe = Object.entries(selectedItem?.Recipe || {}).map(
    ([name, amount]) => ({
      name,
      amount,
    })
  );

  return (
    <div className="RS-Container">
      <div className="Money-Container">
        <p>$</p>
        <p id="Money">20,100</p>
      </div>
      <div className="Recipe-Container">
        <p>Recipe</p>
        {/* Check if the recipe is not empty */}
        {recipe.length > 0 ? (
          recipe.map((ingredient, index) => (
            <Ingredient
              key={index}
              image={`./../../Assets/${ingredient.name}.png`} // Assuming you have images named after the ingredients (e.g., "Iron.png")
              quantity={`0/${ingredient.amount}`} // Dynamic quantity (you can adjust this logic)
              name={ingredient.name} // Ingredient name
            />
          ))
        ) : (
          <p>No ingredients available</p> // If no recipe exists
        )}
      </div>
    </div>
  );
};

export default RightSideMenu;
