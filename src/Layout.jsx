import React, { useState } from "react";
import Items from "./Items.json"; // Ensure path is correct

import "./imports.css";
import "./Layout.css";

import LeftSideMenu from "./Modules/LeftSideMenu/LeftSideMenu";
import MiddleMenu from "./Modules/MiddleMenu/MiddleMenu";
import RightSideMenu from "./Modules/RightSideMenu/RightSideMenu";
import ControlShowcase from "./Modules/ControlShowcase/ControlShowcase";
import TopBarMenu from "./Modules/TopBarMenu/TopBarMenu";

const Layout = () => {
  const [selectedType, setSelectedType] = useState("Armour");
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="main">
      <TopBarMenu
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <LeftSideMenu
        selectedType={selectedType}
        setSelectedItem={setSelectedItem}
      />
      <MiddleMenu selectedItem={selectedItem} />
      <RightSideMenu selectedItem={selectedItem} />
      <ControlShowcase />
    </div>
  );
};

export default Layout;
