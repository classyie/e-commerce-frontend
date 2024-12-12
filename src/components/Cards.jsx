import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import { products } from "../assets/temp";
function Cards() {

  // Uncomment this when you want to use backend API for data
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get("https://dummyjson.com/products?limit=10");
  //       setProducts(response.data.products); 
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //       console.log(products);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  // if (loading)
  //   return (
  //     <div className="text-center justify-center items-center font-bold mt-40">
  //       Loading...
  //     </div>
  //   );
  // if (error)
  //   return (
  //     <div className="text-center justify-center items-center font-bold mt-40">
  //       Error: {error}
  //     </div>
  //   );

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 m-20 gap-5">
      {products.map((data) => (
        <Card key={data.id} data={data} /> // Use key for React list rendering
      ))}
    </div>
  );
}

export default Cards;
