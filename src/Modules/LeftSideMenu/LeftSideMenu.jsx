import React from "react";
import Items from "./../../Items.json"; // Ensure this path is correct

import "./../../imports.css";
import "./../../Layout.css";
import "./LeftSideMenu.css";

const LeftSideMenu = ({ selectedType, setSelectedItem }) => {
  // Get the items for the selected type
  const selectedItems = Items[selectedType] || [];

  return (
    <div className="IS-Container">
      {/* Dynamically rendered item buttons based on the selected category */}
      {selectedItems.length > 0 ? (
        selectedItems.map((item, index) => (
          <div
            className="IS-Button"
            key={index}
            onClick={() => setSelectedItem(item)} // Set selected item
          >
            {item.Name}
          </div>
        ))
      ) : (
        <p>No items available in this category</p>
      )}
    </div>
  );
};

export default LeftSideMenu;
