import React from "react";
import MainMenu from "../MainNav/MainNav";

// Images
import HeaderBgImg from "../../img/food-bg.jpg";

export default function ({ className }) {
  return (
    <div
      className="site-header px-5 py-10 bg-no-repeat bg-bottom bg-cover h-full"
      style={{ backgroundImage: `url(${HeaderBgImg})` }}
    >
      <MainMenu />
    </div>
  );
}
