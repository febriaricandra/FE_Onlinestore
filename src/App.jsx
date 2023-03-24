import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductCard from './pages/ProductCard'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<ProductCard />} />
      <Route path='/cart' element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
    </Routes>
  )
}

export default App
