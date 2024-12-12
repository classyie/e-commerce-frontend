import React from "react";
import Cartitem from "./Cartitem";

function Cart(props) {
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

          {/* Cart Item */}
          {/* <Cartitem  /> */}
          {props.items.map((item) => {
            <Cartitem key={item.id} item={item} />;
            {console.log(item)}
          })}
        </div>

        {/* Right Section: Price Details */}
        <div className="w-full md:w-1/3 p-6 bg-gray-50 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Price Details
          </h2>
          <hr className="border-gray-300 mb-4" />
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Price (1 item)</span>
            <span>Rs. 1250</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Discount</span>
            <span className="text-green-600">- Rs. 200</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Delivery Charges</span>
            <span className="text-green-600">Free</span>
          </div>
          <hr className="border-gray-300 mb-4" />
          <div className="flex justify-between text-lg font-semibold text-gray-800">
            <span>Total Amount</span>
            <span>Rs. 1050</span>
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
