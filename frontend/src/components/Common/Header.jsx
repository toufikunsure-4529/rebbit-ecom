import React from "react";
import TopBar from "../Layout/TopBar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      {/* Topbar */}
      <TopBar />
      <Navbar />
      {/* Cart Drawer */}
    </div>
  );
};

export default Header;
