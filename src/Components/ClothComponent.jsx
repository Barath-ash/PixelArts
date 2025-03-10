import React from 'react';
import { motion } from 'framer-motion';

const ClothComponent = ({ images, names, prices }) => {
  return (
    <div className="flex flex-col items-center gap-8 px-4">
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
        {images.map((image, index) => (
          <motion.div 
            key={index}
            className="flex flex-col items-center w-[30%]"
            initial={{ opacity: 0, y: 50 }}   
            whileInView={{ opacity: 1, y: 0 }}   
            transition={{ duration: 0.5, delay: index * 0.2 }}  
            viewport={{ once: false, amount: 0.2 }}   
          >
            <motion.img
              src={image}
              alt={names[index]}  
              className="w-full h-[42vh] mt-6 object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
            <h3 className="text-center text-lg font-bold tracking-widest mt-2">{names[index]}</h3>
            <p className="text-center text-lg font-mono">{prices[index]}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ClothComponent;
