import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <> <div className='bg-white shadow-xl'>
      <div className="flex justify-evenly gap-55 p-4 m-1.5 ">
        <div>
          <h1 className="relative right-12 text-2xl font-bold">PixelArts</h1>
        </div>
        <div>
          <ul className="flex justify-evenly gap-25 font-serif text-sm/9 font-medium   relative mt-1">
            <li className="flex font-sm ">
              <span className="text-black absolute -inset-x-5.5 top-2.5  text-base">
                <FaHome />
              </span>
              HOME
            </li>
            <li className='relative'>
              <span className="text-black absolute -inset-x-5.5 top-2.5 text-base">
                <IoIosAlert />
              </span>
              ABOUT US
            </li>
            <li className='relative'>
            <span className="text-black absolute -inset-x-5.5 top-2.5   text-base">
            <RiContactsBook3Fill />
              </span>
              CONTACT
            </li>

            <li className='relative'> 
            <span className="text-black absolute -inset-x-5.5 top-2.5 text-base">
            <FaShoppingCart />
              </span>
           
              CART</li>
          </ul>
        </div>
        <div className='text-2xl justify-center mt-1.5'>
           <a href="#"> 
          <span className=''><FaCircleUser /></span>
         </a>
        </div>
      </div>
      </div>
    </>
  );
}

export default Navbar
