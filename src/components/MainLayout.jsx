import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className=" px-5 ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
