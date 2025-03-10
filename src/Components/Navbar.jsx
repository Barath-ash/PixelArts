import React from 'react';
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-white shadow-xl p-1 fixed top-0 w-full z-50">
      <div className="flex items-center justify-between px-10 py-4">
        
        <h1 className="text-2xl font-bold text-gray-900">PixelArts</h1>
        
        <ul className="flex gap-20 text-sm font-medium text-gray-800 tracking-widest">
          <li className="flex items-center gap-2 cursor-pointer hover:text-gray-500 transition-all">
            <FaHome className="text-lg" />
            <a href="">HOME</a>
            
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-gray-500 transition-all">
            <IoIosAlert className="text-lg" />
            ABOUT US
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-gray-500 transition-all">
            <RiContactsBook3Fill className="text-lg" />
            CONTACT
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-gray-500 transition-all">
            <FaShoppingCart className="text-lg" />
            CART
          </li>
        </ul>

        <a href="#" className="text-2xl text-gray-700 hover:text-gray-500 transition-all">
          <FaCircleUser />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
