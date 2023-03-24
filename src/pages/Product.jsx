import React, { useState, useEffect } from "react";
import Footers from "../components/Footers";
import ListProducts from "../components/ListProducts";
import Navbar from "../components/Navbar";

export default function Product() {
  const url = "http://127.0.0.1:8000/api/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    };
    getAllProducts();
  }, []);
  return (
    <div>
      <Navbar />
      <ListProducts products={products.data} />
      <Footers />
    </div>
  );
}
