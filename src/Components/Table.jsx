import React from 'react';

const Table = () => {
  const orders = [
    { id: '01', product: 'Black Hoodie', size: 'M', quantity: 1, price: '₹799/-' },
    { id: '02', product: 'Black Hoodie', size: 'S', quantity: 1, price: '₹799/-' },
    { id: '03', product: 'Black Hoodie', size: 'L', quantity: 1, price: '₹799/-' }
  ];

  return (
    <div className="w-full max-w-[1098px] mx-auto mt-10 rounded-[13px] px-4">
      <h2 className="text-center text-xl font-bold mb-4">YOUR CART</h2>
      <h2 className="text-start text-xl font-bold mb-4">Your Orders</h2>
      <div className="hidden md:flex bg-gray-200 p-4 rounded-t-[13px]">
        <span className="w-1/5 font-semibold">ID</span>
        <span className="w-2/5 font-semibold">Product</span>
        <span className="w-1/5 font-semibold">Size</span>
        <span className="w-1/5 font-semibold">Quantity</span>
        <span className="w-1/5 font-semibold">Price</span>
      </div>
      {orders.map((order, index) => (
        <div key={index} className="bg-gray-300 flex flex-col md:flex-row justify-between items-center p-4 mb-2 rounded-[13px]">
          <div className="w-full md:w-1/5 flex justify-between md:block">
            <span className="md:hidden font-semibold">ID: </span>{order.id}
          </div>
          <div className="w-full md:w-2/5 flex justify-between md:block">
            <span className="md:hidden font-semibold">Product: </span>{order.product}
          </div>
          <div className="w-full md:w-1/5 flex justify-between md:block">
            <span className="md:hidden font-semibold">Size: </span>{order.size}
          </div>
          <div className="w-full md:w-1/5 flex justify-between md:block">
            <span className="md:hidden font-semibold">Quantity: </span>{order.quantity}
          </div>
          <div className="w-full md:w-1/5 flex justify-between md:block">
            <span className="md:hidden font-semibold">Price: </span>{order.price}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;