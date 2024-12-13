import React from "react";

function Cartitem({
  item,
  incrementQuantity,
  decrementQuantity,
  removeHandler,
}) {
  if (!item) {
    return (
      <div className="text-center justify-center mt-40 font-bold">
        Item not found
      </div>
    );
  }

  const discountPrice = item.price * (1 - item.discountPercentage / 100);
  const discountAmount = item.price - discountPrice;

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
        <img
          src={item.images}
          className="w-32 h-32 object-cover rounded-lg shadow"
          alt={item.title}
        />
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-700">{item.title}</h3>
          <p className="text-sm text-gray-500">Seller: {item.brand}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="line-through text-gray-500">Rs. {item.price}</span>
            <span className="text-lg font-semibold text-gray-800">
              Rs. {discountPrice.toFixed(2)}
            </span>
            <span className="text-sm font-bold text-green-600">
              Rs. {discountAmount.toFixed(2)} Off
            </span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-gray-700">
              Quantity:
              <div className="relative flex items-center max-w-[8rem]">
                <button
                  type="button"
                  onClick={() => decrementQuantity(item.id)}
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  value={item.quantity}
                  readOnly
                  className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => incrementQuantity(item.id)}
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="font-semibold text-gray-800">
              Rs. {(discountPrice * item.quantity).toFixed(2)}
            </div>
          </div>
          <div className="flex gap-6 text-sm text-blue-600 cursor-pointer mt-4">
            <span className="hover:underline">Save for later</span>
            <button onClick={()=> removeHandler(item.id)}>
              <span className="hover:underline text-red-500">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
