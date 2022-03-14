import React from "react";

// Components
import Header from "../../components/Header/Header";
import MenuItem from "../../components/MenuItem/MenuItem";

// Data
import { foodItems } from "./foodItems";

export default function () {
  const MenuItemElements = foodItems.map((item, index) => {
    return (
      <div className="menu-item-wrapper px-4 py-3">
        <MenuItem item={item} key={"menu-item-" + index} />
      </div>
    );
  });

  return (
    <div>
      <Header className="mb-4 py-3 border" />

      {MenuItemElements}
    </div>
  );
}
