import { IoMdClose } from "react-icons/io";
import React, { useState } from 'react'
import CartContents from "../Cart/CartContents";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {

  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[28rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
      {/* Close button */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">Your Cart</h2>
        <button
          onClick={toggleCartDrawer}
          className="p-1 rounded hover:bg-gray-100 transition"
          aria-label="Close Cart"
        >
          <IoMdClose className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      {/* Cart Content scrollaable area */}
      <div className="flex-grow p-4 overflow-y-auto">

        <CartContents />
      </div>

      {/* Checkout button */}
      <div className="p-4 bg-white sticky bottom-0">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">Checkout</button>
        <p className="text-xs tracking-tighter text-gray-500 mt-2 text-center">* Shipping, taxes, and discount code calculated at Checkout</p>
      </div>
    </div>
  )
}

export default CartDrawer