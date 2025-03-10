import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div> 
      <div className='w-full h-[40vh] bg-gray-200 flex justify-between p-12 mt-25'>
        <div>
          <h3 className='text-sm font-bold'>COMPANY INFO</h3>
          <ul className='  justify-center items-center mt-4 text-sm leading-6.5'>
            <li>  About Us</li>
            <li>Latest Posts</li>
            <li>Contact Us</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
        <div>
          <h3 className='text-sm font-bold'>HELP LINKS</h3>
          <ul className='  justify-center items-center mt-4 text-sm leading-6.5'>
            <li>Tracking</li>
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Shipping Info</li>
            <li>FAQ</li>
          </ul>
        </div>
        </div>
        <div>
        <div>
          <h3 className='text-sm font-bold'>USEFUL LINKS</h3>
          <ul className='  justify-center items-center mt-4 text-sm leading-6.5'>
            <li>Special</li>
            <li>Offers</li>
            <li>Gift Cards</li>
            <li>Advertising</li>
            <li>Terms Of Use</li>
          </ul>
        </div>
        </div>
        <div>
       
        <div className='flex flex-col items-center'>
          <h3 className='text-sm font-bold mb-4 text-center'>GET IN THE KNOW</h3>
          <div className='flex items-center border-b-2 pb-1'>
            <input 
              type="text" 
              placeholder='Enter email' 
              className='outline-none p-1.5 text-sm font-mono bg-transparent'
            />
            <span className='px-2 cursor-pointer text-lg transition-transform ease-in-out transform duration-300 hover:scale-130'><IoIosArrowForward /></span>
          </div>
        </div>
       
     
        </div>
      </div>
    </div>
  )
}

export default Footer