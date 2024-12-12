import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <Link to="/">
        <div className="text-2xl font-bold text-blue-600 ml-5 mr-2">ShopEasy</div>
      </Link>
      {/* Search Bar */}
      <div className="flex items-center w-full md:w-1/2 relative mt-4 md:mt-0">
        <input
          type="text"
          className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
          placeholder="Search for products..."
        />
        <FaSearch className="absolute right-3 text-gray-500" />
      </div>

      {/* Hamburger Icon */}
      <div
        className="md:hidden text-gray-600 cursor-pointer mt-4 ml-4 md:mt-0"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars size={24} />
      </div>

      {/* Menu Items */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-16 right-6 shadow-lg rounded-md p-4 md:p-0 md:static md:flex md:items-center md:space-x-4`}
      >
        {/* Link to Sign page */}
        <Link
          to="/sign"
          className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          <FaUser className="text-gray-700" />
          <span>Login/Sign Up</span>
        </Link>

        <Link
          to="/cart"
          className="relative flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <FaShoppingCart className="text-white" />
          <span>Cart</span>
          <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full ">
            {props.items}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
