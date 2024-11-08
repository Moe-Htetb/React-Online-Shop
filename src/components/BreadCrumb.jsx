import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb({ CurrentPageTitle }) {
  return (
    <div className="w-full flex gap-3 ml-5 md:ml-0">
      <Link to="/">Home</Link>
      <span>/</span>
      <Link to="/">{CurrentPageTitle}</Link>
    </div>
  );
}

export default BreadCrumb;
