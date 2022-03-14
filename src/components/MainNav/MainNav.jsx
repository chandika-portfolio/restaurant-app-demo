import React from "react";

export default function MainMenu() {
  return (
    <nav>
      <ul className="main-nav">
        <li>
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">Branches</a>
        </li>
        <li>
          <a href="#">My Account</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
      </ul>
    </nav>
  );
}
