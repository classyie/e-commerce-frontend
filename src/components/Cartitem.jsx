import React from "react";

function Cartitem({ item }) {
  console.log("item is ", item);

  // Fallback if no item is passed
  if (!item) {
    return (
      <div className="text-center justify-center mt-40 font-bold">
        Item not found
      </div>
    );
  }

  // Calculate the discount price
  const discountPrice = item.price * (1 - item.discountPercentage / 100);
  const discountAmount = item.price - discountPrice; // Amount saved due to discount

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
        <img
          src={item.images} // Product image URL from the item object
          className="w-32 h-32 object-cover rounded-lg shadow"
          alt={item.title} // Title as alt text for accessibility
        />
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-700">{item.title}</h3>
          <p className="text-sm text-gray-500">Seller: {item.brand}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="line-through text-gray-500">Rs. {item.price}</span>
            <span className="text-lg font-semibold text-gray-800">
              Rs. {discountPrice.toFixed(2)} {/* Display discounted price */}
            </span>
            <span className="text-sm font-bold text-green-600">
              Rs. {discountAmount.toFixed(2)} Off
            </span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-gray-700">Quantity: {item.quantity || 1}</div> {/* Assuming quantity is a property */}
            <div className="font-semibold text-gray-800">
              Rs. {(discountPrice * (item.quantity || 1)).toFixed(2)} {/* Total price based on quantity */}
            </div>
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
