"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function AddProduct() {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/products/add",
        product
      );

      alert("Product Added Successfully");

      setProduct({
        name: "",
        price: "",
        image: "",
      });

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Add Product
        </h1>

        <form onSubmit={addProduct} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-400"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-400"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold text-lg transition duration-300"
          >
            Add Product
          </button>

        </form>

        <Link href="/view-products">

          <button className="w-full mt-5 bg-black hover:bg-gray-800 text-white py-4 rounded-xl font-semibold text-lg transition duration-300">

            View Products

          </button>

        </Link>

      </div>

    </div>
  );
}