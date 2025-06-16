import React from "react";
import Navbar from "./Navbar";
import TopBar from "../Layout/TopBar";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      {/* Topbar */}
      <TopBar />
      <Navbar />
      {/* Cart Drawer */}
    </header>
  );
};

export default Header;
