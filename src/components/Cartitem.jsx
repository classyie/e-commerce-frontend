import React from "react";
import { products } from "../assets/temp";
function Cartitem(props) {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
        <img
          src="https://rukminim2.flixcart.com/image/224/224/xif0q/stylus/6/9/t/upgraded-stylus-pen-ultra-high-precision-sensitivity-with-palm-original-imahyvhpm3ggwtbf.jpeg?q=90"
          className="w-32 h-32 object-cover rounded-lg shadow"
          alt="Stylus"
        />
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-700">
            Flipkart SmartBuy Upgraded Stylus Pen
          </h3>
          <p className="text-sm text-gray-500">Seller: Tempo</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="line-through text-gray-500">Rs. 1250</span>
            <span className="text-lg font-semibold text-gray-800">
              Rs. 1050
            </span>
            <span className="text-sm font-bold text-green-600">
              Rs. 200 Off
            </span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-gray-700">Quantity: 1</div>
            <div className="font-semibold text-gray-800">Rs. 1050</div>
          </div>
          <div className="flex gap-6 text-sm text-blue-600 cursor-pointer mt-4">
            <span className="hover:underline">Save for later</span>
            <span className="hover:underline text-red-500">Remove</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
