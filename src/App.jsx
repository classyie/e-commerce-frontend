import "./App.css";
import Home from "./components/Home";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Sign from "./components/Sign";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
