import React from "react";
import Navbar from "./Navbar";
import Topbar from "../Layout/TopBar";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      {/* Topbar */}
      <Topbar />
      <Navbar />
      {/* Cart Drawer */}
    </header>
  );
};

export default Header;
