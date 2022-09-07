import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component router/navbar';
import Login from './component router/Login';
import Products from './component router/Products';
import Footer from './component router/footer';
import Home from './component router/Home';
import Cart from './component router/Cart';
import Addproduct from './component router/addproduct';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
