import "./App.css";
import Home from "./components/Home";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Sign from "./components/Sign";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    // console.log("Item added to cart", item);
    // console.log("Total items added to cart", cartItems);
  };
  return (
    <Router>
      <NavBar items={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart items={cartItems} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
