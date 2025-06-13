import { HiBars3BottomRight } from "react-icons/hi2";
import { AiFillShopping } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false)
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }
  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen)
  }
  return (
    <>
      <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
        {/* Left - Logo */}
        <div>
          <Link to="/" className='text-2xl font-medium'>
            Rebbit
          </Link>
        </div>

        {/* Center Nav menu */}
        <div className='hidden md:flex space-x-6'>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            Men
          </Link>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            Women
          </Link>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            Top Wear
          </Link>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            Bottom Wear
          </Link>
        </div>

        {/* Right Section Icon */}
        <div className='flex items-center space-x-4'>
          <Link to="/profile" className='hover:text-black'>
            <AiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button onClick={toggleCartDrawer} className='relative hover:text-black'>
            <AiFillShopping className="h-6 w-6 text-gray-700" />
            <span className=" absolute -top-2 bg-rebbit-red text-white text-xs rounded-full px-2 py-0.5">4</span>
          </button>
          {/* Search Icon */}
          <div className=" overflow-hidden">
            <SearchBar />
          </div>

          <button className="md:hidden" onClick={toggleNavDrawer}><HiBars3BottomRight className="h-6 w-6 text-gray-700" /></button>
        </div>

      </nav>

      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transition-transform duration-300 transform ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%]`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-white">
          <Link to="/" className="text-2xl font-bold text-red-600 tracking-wide">
            Rebbit
          </Link>
          <button
            onClick={toggleNavDrawer}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Close Menu"
          >
            <IoMdClose className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="px-5 py-6 space-y-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Menu</h2>
          {[
            { label: "Men", to: "#" },
            { label: "Women", to: "#" },
            { label: "Top Wear", to: "#" },
            { label: "Bottom Wear", to: "#" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-red-600 text-base transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

    </>
  )
}

export default Navbar