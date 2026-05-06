"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ViewProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/products"
    );

    setProducts(res.data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 p-8">

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-4xl font-bold text-white">
          All Products
        </h1>

        <Link href="/add-product">

          <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition duration-300">

            Add Product

          </button>

        </Link>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {products.map((product) => (

          <div
            key={product._id}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition duration-300"
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold text-gray-800">
                {product.name}
              </h2>

              <p className="text-indigo-600 text-xl mt-3 font-semibold">
                ${product.price}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}