import React from 'react'
import img1 from '../assets/Cloths/blackhoddie.jpg';
const Content = () => {
  return (
    <div className="bg-white text-black min-h-screen flex justify-center items-center">
      <div className="container max-w-6xl flex p-10">
        {/* Image Section */}
        <div className="w-1/2 pr-10">
          <img src={img1} alt="Black Hoodie" className="w-full rounded-lg" />
        </div>

        {/* Product Details Section */}
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-3">Black Hoodie</h1>
          <div className="flex items-center text-orange-500 mb-2">
            ★★★★☆ <span className="text-gray-600 ml-2">(15)</span>
          </div>
          <p className="text-gray-700 mb-5">
            A classic black hoodie that never goes out of style. This is one of our most premium collection of Tops. This black hoodie is made up of pure cotton and has a premium finish.
          </p>
          <div className="mb-5">
            <label htmlFor="size" className="block text-lg mb-2">Select Size</label>
            <select id="size" className="w-full p-2 border border-gray-300 rounded-lg">
              <option>Select Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="text-gray-600 mb-5">
            <span className="font-bold">Category:</span> Men, Casual<br />
            <span className="font-bold">Tags:</span> Modern, Design, Cotton
          </div> 
        </div>
      </div>
    </div>

  )
}

export default Content