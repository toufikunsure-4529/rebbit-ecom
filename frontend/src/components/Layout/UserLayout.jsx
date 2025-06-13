import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
const UserLayout = () => {
  return (
    <>
      <Header />
      {/* main Content  */}
      <img src="/hero-bg.jpg" alt="hero-bg" className="w-full object-cover" />
      THis is Main
      <Footer />
    </>
  );
};

export default UserLayout;
