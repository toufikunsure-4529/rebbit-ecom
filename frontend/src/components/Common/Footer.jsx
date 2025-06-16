import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { TbBrandMeta } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] text-gray-700 pt-14 pb-5 border-t border-gray-200">
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8">

        {/* Logo & Description */}
        <div>
          <Link to="/" className="text-3xl font-bold text-red-500 mb-4 inline-block">Rebbit</Link>
          <p className="text-base text-gray-500">
            Discover top-quality fashion for men and women. Shop the latest trends and enjoy seamless online shopping with Rebbit.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-red-500 inline-block">Shop</h3>
          <ul className="space-y-2 text-base text-gray-800">
            <li><Link to="/shop/mens-top-wear" className="hover:text-red-500 transition-colors">Men's Topwear</Link></li>
            <li><Link to="/shop/womens-top-wear" className="hover:text-red-500 transition-colors">Women's Topwear</Link></li>
            <li><Link to="/shop/bottom-wear" className="hover:text-red-500 transition-colors">Bottomwear</Link></li>
            <li><Link to="/shop/footwear" className="hover:text-red-500 transition-colors">Footwear</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-red-500 inline-block">Support</h3>
          <ul className="space-y-2 text-base text-gray-800">
            <li><Link to="/contact" className="hover:text-red-500 transition-colors">Contact Us</Link></li>
            <li><Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
            <li><Link to="/faq" className="hover:text-red-500 transition-colors">FAQs</Link></li>
            <li><Link to="/features" className="hover:text-red-500 transition-colors">Features</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-red-500 inline-block">Policies</h3>
          <ul className="space-y-2 text-base text-gray-800">
            <li><Link to="/terms-and-conditions" className="hover:text-red-500 transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/trademark" className="hover:text-red-500 transition-colors">Trademark Policy</Link></li>
            <li><Link to="/return-policy" className="hover:text-red-500 transition-colors">Return Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:text-red-500 transition-colors">Refund Policy</Link></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-red-500 inline-block">Follow Us</h3>
          <div className="flex flex-wrap sm:flex-nowrap sm:items-center gap-4 mb-4">
            <a href="#" aria-label="Meta" className="hover:text-red-500 text-xl"><TbBrandMeta /></a>
            <a href="#" aria-label="Instagram" className="hover:text-red-500 text-xl"><IoLogoInstagram /></a>
            <a href="#" aria-label="Twitter" className="hover:text-red-500 text-xl"><RiTwitterXLine /></a>
          </div>
          <div className="text-base text-gray-800 mt-4">
            <p className="mb-1 font-medium">Customer Care</p>
            <p className="flex items-center gap-2"><FiPhoneCall /> +91 80010 74096</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500 px-4">
        © 2025 Rebbit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
