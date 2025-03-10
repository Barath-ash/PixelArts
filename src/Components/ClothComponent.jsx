import React from 'react';

const ClothComponent = ({ images, names, prices }) => {
  return (
    <div className="flex flex-col items-center gap-8 px-4">
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6.5xl">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center w-[30%]">
            <img
              src={image}
              alt={names[index]}  
              className="w-full h-[42vh] object-cover rounded-xl shadow-md"
            />
            <h3 className="text-center text-lg font-bold tracking-widest mt-2">{names[index]}</h3>
            <p className="text-center text-lg font-mono">{prices[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothComponent;
