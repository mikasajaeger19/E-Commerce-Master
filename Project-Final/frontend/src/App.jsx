import React from 'react'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import AddProducts from './pages/AddProducts/AddProducts.jsx'
import UpdateProductForm from './components/UpdateProductForm/UpdateProductForm.jsx'
import {Cart} from './pages/cart/cart.jsx'
import {Checkout} from './pages/checkout/checkout.jsx'
import {Account} from './pages/account/account.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addproducts" element={<AddProducts />} />
        <Route path="/updateproducts/:id" element={<UpdateProductForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
