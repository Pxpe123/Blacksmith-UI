import React from "react";
import "./../../imports.css";
import "./../../Layout.css";
import "./TopBarMenu.css";

const TopBarMenu = ({ selectedType, setSelectedType }) => {
  // Function to handle category selection
  const handleSelection = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="TB-Container">
      <div className="Tb-Title"></div>
      <div className="Button-Container">
        <button
          className={`TB-Button ${selectedType === "Armour" ? "selected" : ""}`}
          onClick={() => handleSelection("Armour")}
        >
          <i className="fas fa-shield-alt"></i> {/* Armour Icon */}
        </button>
        <button
          className={`TB-Button ${selectedType === "Magic" ? "selected" : ""}`}
          onClick={() => handleSelection("Magic")}
        >
          <i className="fas fa-magic"></i> {/* Magic Icon */}
        </button>
        <button
          className={`TB-Button ${selectedType === "Weapon" ? "selected" : ""}`}
          onClick={() => handleSelection("Weapon")}
        >
          <i className="fas fa-crosshairs"></i> {/* Weapon Icon */}
        </button>
        <button
          className={`TB-Button ${
            selectedType === "Archery" ? "selected" : ""
          }`}
          onClick={() => handleSelection("Archery")}
        >
          <i className="fas fa-crosshairs"></i>{" "}
          {/* Archery Icon (using crosshairs as a placeholder) */}
        </button>
        <button
          className={`TB-Button ${selectedType === "Potion" ? "selected" : ""}`}
          onClick={() => handleSelection("Potion")}
        >
          <i className="fas fa-cogs"></i> {/* Potion Icon */}
        </button>
      </div>
    </div>
  );
};

export default TopBarMenu;
