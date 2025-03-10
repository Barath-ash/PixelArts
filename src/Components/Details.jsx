import React from 'react'
import { FaTruck } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { BiSolidLock } from "react-icons/bi";

const Details = () => {
  const datas = [{
    Icons: <FaTruck/>, 
    title:"Free Delivery",
    content:"Enjoy free delivery on orders above ₹1199",
  },
  {Icons:<TbReload/>,
    title:"14 Days Return",
    content:"Hassle-Free 14-Day Exchange on all orders"},
    {Icons:<BiSolidLock/>,
      title:"Secure Payments",
      content:"Your Payments are fully encrypted and secured"}]
  return (
    <div> 
      <div className='p-14 mt-3 mb-4'>
        <h1 className='text-3xl font-bold tracking-widest'>Our Promise to you...</h1>
        <div className='flex  justify-between items-center mt-12 w-full'>
          {datas.map((values)=>{
            return(
<div className='w-[30%] px-10 relative'>  
                <h3 className='font-bold text-lg tracking-widest flex '> <span className='text-xl left-3 top-1.5 absolute'>{values.Icons}</span> <p>{values.title}</p></h3>
                <p className='w-4/6 tracking-wider'>
                  {values.content}
                </p>
                </div>
            )
                
          })}
        
         
          
           
        </div>
      </div>
    </div>
  )
}

export default Details