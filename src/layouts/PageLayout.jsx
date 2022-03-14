import React from "react";

// Components
import Header from "../components/Header/Header";

export default function PageLayout({ children }) {
  return (
    <div className="page-layout grid grid-cols-5">
      <div className="page-content col-span-2">{children}</div>
      <div className="col-span-3">
        <Header />
      </div>
    </div>
  );
}
