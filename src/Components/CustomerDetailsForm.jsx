import React from 'react';

const CustomerDetailsForm = () => {
  return (
    <div className="w-full max-w-[1003px] mx-auto mt-10 rounded-[11px] border border-gray-400 p-8">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Customer Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {['Name', 'Email', 'Phone Number', 'HOUSE/FLAT NO', 'Address'].map((label) => (
          <div key={label} className="relative">
            <label className="absolute top-[-10px] left-3 bg-white px-1 text-gray-600 text-sm">{label}</label>
            <input
              type="text"
              className="w-full h-[56px] rounded-[11px] border border-gray-400 px-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center md:items-end mt-10">
        <div className="text-xl font-bold mt-2 mb-10">TOTAL PRICE : ₹2397/-</div>
        <button className="w-full md:w-[238px] h-[48px] bg-black text-white rounded-[11px]">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default CustomerDetailsForm;
