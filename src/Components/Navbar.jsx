import React, { useState } from 'react';
import { FaHome, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-white shadow-xl p-1 fixed top-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">PixelArts</h1>
        
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`md:flex gap-10 text-sm font-medium text-gray-800 tracking-widest absolute md:static bg-white md:bg-transparent w-full md:w-auto top-16 left-0 md:flex-row flex-col items-center ${isOpen ? 'flex' : 'hidden'}`}>
          <li className="flex items-center gap-2 cursor-pointer hover:text-gray-500 transition-all py-2 md:py-0">
            <FaHome className="text-lg" />
            <a href=""><Link to="/">HOME</Link></a>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-gray-500 transition-all py-2 md:py-0">
            <IoIosAlert className="text-lg" />
            ABOUT US
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-gray-500 transition-all py-2 md:py-0">
            <RiContactsBook3Fill className="text-lg" />
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-gray-500 transition-all py-2 md:py-0">
            <FaShoppingCart className="text-lg" />
            <Link to="/cart">Cart</Link>
          </li>
        </ul>

        <a href="#" className="hidden md:block text-2xl text-gray-700 hover:text-gray-500 transition-all">
          <FaCircleUser />
        </a>
      </div>
    </div>
  );
};

export default Navbar;