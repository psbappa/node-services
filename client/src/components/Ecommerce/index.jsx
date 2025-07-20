import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const categories = [
  "Mobiles",
  "Fashion",
  "Electronics",
  "Home",
  "Beauty",
  "Toys",
  "Grocery",
];

const products = [
  {
    id: "p1",
    name: "Wireless Headphones",
    price: "₹1,999",
    image: "https://via.placeholder.com/200x200?text=Headphones",
  },
  {
    id: "p2",
    name: "Smartphone",
    price: "₹14,999",
    image: "https://via.placeholder.com/200x200?text=Smartphone",
  },
  {
    id: "p3",
    name: "Gaming Mouse",
    price: "₹999",
    image: "https://via.placeholder.com/200x200?text=Mouse",
  },
  {
    id: "p4",
    name: "Laptop",
    price: "₹39,999",
    image: "https://via.placeholder.com/200x200?text=Laptop",
  },
];

const deals = [
  {
    id: 1,
    name: "iPhone 14",
    price: "₹68,999",
    image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg",
  },
  {
    id: 2,
    name: "Boat Rockerz 450",
    price: "₹1,199",
    image: "https://m.media-amazon.com/images/I/61a6xI+4ufL._SL1500_.jpg",
  },
  {
    id: 3,
    name: 'Samsung LED TV 43"',
    price: "₹29,999",
    image: "https://m.media-amazon.com/images/I/71oUKJekRzL._SL1500_.jpg",
  },
  {
    id: 4,
    name: "OnePlus Nord CE 3",
    price: "₹24,999",
    image: "https://m.media-amazon.com/images/I/51bRSWrEcBL._SL1500_.jpg",
  },
];

export default function index() {
  const [fetchProducts, setFetchProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(`${import.meta.env.VITE_PRODUCT_BACKEND_URL}/api/products`, {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    });
    // console.log('Products: ', res.data.data);
    setFetchProducts(res.data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="bg-gray-100 min-h-screen pb-20">
        {/* Hero Banner */}
        <div className="w-full h-[150px] bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center text-4xl font-bold shadow-lg">
          Big Deals of the Day 🚀
        </div>

        {/* 🧭 Categories */}
        <div className="flex justify-center gap-4 overflow-x-auto px-4 py-2 bg-white shadow-sm mb-6 scrollbar-hide">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 bg-blue-50 px-4 py-2 rounded-full text-sm text-blue-700 font-medium hover:bg-blue-100 cursor-pointer"
            >
              {cat}
            </div>
          ))}
        </div>

        {/* <Sidebar /> */}

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto p-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Featured Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">


            {/* {products.map((product) => ( */}
            {fetchProducts.map((product, index) => (
              <div
                // key={product.id}
                key={index+ '-' + product.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-green-600 font-medium">{product.price}</p>
                <button className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 Deals Section */}
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            🔥 Hot Deals for You
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {deals.map((item) => (
              <div
                key={item.id}
                className="bg-white p-3 rounded-lg shadow hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-contain mb-3"
                />
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-green-600 font-semibold">{item.price}</p>
                <button className="mt-2 w-full bg-yellow-500 text-white py-1 text-sm rounded hover:bg-yellow-600">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
