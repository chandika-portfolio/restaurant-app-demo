import React from "react";
import ItemImg from "../../img/food1.jpeg";

export default function MenuItem({ item }) {
  return (
    <div className="menu-item flex items-center">
      <div className="menu-item-content" style={{ flexBasis: "66.67%" }}>
        <h4 className="mb-2">{item.name}</h4>
        <p className="text-sm mb-3">{item.description}</p>
        <span className="menu-item-price-tag border px-2 py-1 rounded">
          ${item.price.toFixed(2)}
        </span>
      </div>
      <div className="menu-item-image p-3" style={{ flexBasis: "33.33%" }}>
        <img src={ItemImg} alt="Food image" className="rounded" />
      </div>
    </div>
  );
}
