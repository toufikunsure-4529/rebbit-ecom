import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";

const TopBar = () => {
  return (
    <div className="bg-rebbit-red text-white">
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3 ">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            {" "}
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            {" "}
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            {" "}
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>

        <div className="text-md  text-center flex-grow">
          <span>We shipe worldwide - Fast and reliable shipping!</span>
        </div>
        <div className="text-md hidden md:block">
          <a href="tell:+918001074096" className="hover:text-gray-300">
            +91 8001074096
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar



