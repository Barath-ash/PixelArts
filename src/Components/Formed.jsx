import React from 'react'

const Formed = () => {
  return (
    <>
    <div className="max-w-5xl mx-auto p-8 flex flex-col md:flex-row justify-between">
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-4">We would love to hear from you.</h2>
        <p className="text-gray-600 mb-8">
          If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="w-full p-4 border border-gray-300 rounded-md" />
          <input type="email" placeholder="Email" className="w-full p-4 border border-gray-300 rounded-md" />
        </div>
        <textarea placeholder="Message" className="w-full p-4 border border-gray-300 rounded-md mt-4 h-40"></textarea>
        <button className="bg-black text-white px-6 py-3 mt-4 rounded-md">SEND MESSAGE</button>
      </div>

      <div className="mt-12 md:mt-0 md:ml-12 w-full md:w-1/3">
        <div>
          <h3 className="text-2xl font-bold">Visit Us</h3>
          <p className="text-gray-600">No.34, ABC Street, ABC Nagar, Avadi, Chennai - 600062</p>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold">Get In Touch</h3>
          <p className="text-gray-600">You can get in touch with us on this provided email.</p>
          <p className="text-gray-800">Email: pixelartsonline@gmail.com</p>
        </div>
      </div>
    </div>
    </>
    // <div
    //   className="w-[1240px] h-[563px] absolute top-[582px] left-[63px] bg-blue-500 rounded-2xl shadow-lg p-4"
    // >
    //     <h1>hello</h1>
    // </div>
  )
}

export default Formed