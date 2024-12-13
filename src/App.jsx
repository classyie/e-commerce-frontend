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

  // Function to add an item to the cart or increment its quantity
  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to increment the quantity of a cart item
  const incrementQuantity = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decrementQuantity = (itemId) => {
    setCartItems(
      (prevCartItems) =>
        prevCartItems
          .map((cartItem) =>
            cartItem.id === itemId && cartItem.quantity > 1
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
          .filter((cartItem) => cartItem.quantity > 0) // Remove item if quantity is 0
    );
  };
  const removeHandler = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  return (
    <Router>
      <NavBar items={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={
            <Cart
              items={cartItems}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              removeHandler={removeHandler}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
