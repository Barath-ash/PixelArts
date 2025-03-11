import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Selected from '../Pages/selected'
import Cart from '../Pages/cart'

const Routed = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/select" element={<Selected/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/*" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routed