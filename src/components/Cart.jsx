import React, { useEffect, useState } from "react";
import Cartitem from "./Cartitem";
// import { products } from "../assets/temp";

function Cart({ items, incrementQuantity, decrementQuantity, removeHandler}) {
  const [productPrice, setProductPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to calculate the total price
  useEffect(() => {
    let price = 0;
    let discount = 0;

    items.forEach((item) => {
      // Calculate discount price for each item
      const discountPrice = (item.price * (1 - item.discountPercentage / 100));
      price += ((item.price) * item.quantity);
      discount += (item.price * item.quantity - discountPrice * item.quantity);
      setTotalPrice(price - discount);
      setProductPrice(price);
    });
  }, [items]);

  // Format numbers to 2 decimal places
  const formattedPrice = productPrice.toFixed(2);
  const formattedTotalPrice = totalPrice.toFixed(2);
  const formattedDiscount = (productPrice - totalPrice).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 bg-white shadow-lg rounded-lg p-6">
        {/* Left Section: Order Details */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-gray-700">
              Deliver to: <span className="font-normal">User1, 226002</span>
            </h1>
            <p className="text-gray-500">
              Msv world school, M.S.V world school vindhyanagar nilmatha,
              Lucknow, Lucknow
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Order Details */}
          <h2 className="text-lg font-semibold text-gray-700 mt-4 mb-2">
            Order Details
          </h2>
          <hr className="border-gray-300 mb-4" />
          {items.map((item) => {
            return <Cartitem key={item.id} item={item} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeHandler={removeHandler}/>;
          })}
        </div>

        {/* Right Section: Price Details */}
        <div className="w-full md:w-1/3 p-6 bg-gray-50 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Price Details
          </h2>
          <hr className="border-gray-300 mb-4" />
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Price ({items.length} item{items.length > 1 ? "s" : ""})</span>
            <span>Rs. {formattedPrice}</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Discount</span>
            <span className="text-green-600">- Rs. {formattedDiscount}</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Delivery Charges</span>
            <span className="text-green-600">Free</span>
          </div>
          <hr className="border-gray-300 mb-4" />
          <div className="flex justify-between text-lg font-semibold text-gray-800">
            <span>Total Amount</span>
            <span>Rs. {formattedTotalPrice}</span>
          </div>
          <button className="w-full mt-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
