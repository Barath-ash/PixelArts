import React from 'react';
import { motion } from 'framer-motion';
import banner from '../assets/Banner/Contact.png';

const Banner = () => {
  return (
    <motion.div 
      className="relative bottom-3 w-full overflow-hidden"
      initial={{ opacity: 0, scale: 1.1 }}  // Start slightly zoomed-in and invisible
      animate={{ opacity: 1, scale: 1 }}  // Gradually fade in and zoom out
      transition={{ duration: 1.2, ease: "easeOut" }}  // Smooth easing
    >
      <div 
        className="w-full h-[75vh] bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${banner})` }}
      > 
        <motion.p 
          className="absolute inset-0 flex items-center justify-start text-white text-4xl font-bold tracking-widest bg-black/45"
          initial={{ opacity: 0, y: 50 }}   
          animate={{ opacity: 1, y: 0 }}   
          transition={{ duration: 1, delay: 0.5 }}   
        >
          Contact us
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Banner;
