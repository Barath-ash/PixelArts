import React from 'react';
import banner from '../assets/Banner/image.png';

const Banner = () => {
  return (
    <div className="relative bottom-3 w-full overflow-hidden">
      <div 
        className="w-full h-[75vh] bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${banner})` }}
      > 
        <p className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold tracking-widest bg-black/45">
          STYLES THAT SPEAK WITH YOU
        </p>
      </div>
    </div>
  );
};

export default Banner;
