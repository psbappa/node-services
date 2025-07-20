import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

const SidebarItem = ({ icon, label, active, sidebarOpen }) => (
  <NavLink
    className={`flex items-center gap-3 px-4 py-2 cursor-pointer rounded-lg transition-all duration-200 hover:bg-purple-100 dark:hover:bg-purple-700 ${
      active ? "bg-gray-200" : ""
    }`}
  >
    <span className="w-5 h-5 text-lg">{icon}</span>
    {sidebarOpen && <span className="text-sm font-medium">{label}</span>}
  </NavLink>
);

export default function index() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    brand: '',
    category: '',
    stock: '',
    sold: '',
    ratings: '',
    numReviews: '',
    images: ['', ''],
    featured: false,
    tags: ['', '', '', ''],
    isActive: true,
    productId: '',
    slug: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setProduct((prev) => ({ ...prev, [name]: val }));
  };

  const handleArrayChange = (e, key, index) => {
    const newArray = [...product[key]];
    newArray[index] = e.target.value;
    setProduct((prev) => ({ ...prev, [key]: newArray }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", product);
    // Reset form or further process
  };

  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-16"
          } bg-white shadow-lg transition-all duration-300 p-4 flex flex-col gap-2`}
        >
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mb-6 flex items-center justify-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <span className="text-xl font-bold">≡</span>
          </button>
          <SidebarItem icon="📊" label="Dashboard" to="/admin-dashboard" sidebarOpen={sidebarOpen} />
          <SidebarItem icon="🛍️" label="Products" to="/admin-dashboard/products" sidebarOpen={sidebarOpen} />
          <SidebarItem icon="⚙️" label="Settings" to="/admin-dashboard/settings" sidebarOpen={sidebarOpen} />
          {/* <SidebarItem icon="🚪" label="Logout" sidebarOpen={sidebarOpen} /> */}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome to Admin Dashboard
          </h1>
          {/* <Routes>
            <Route path="/" element={<><Dashboard /><ProductForm /></>} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </Routes> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow">Widget 1</div>
            <div className="bg-white p-4 rounded-xl shadow">Widget 2</div>
            <div className="bg-white p-4 rounded-xl shadow">Widget 3</div>
          </div>

          {/* Product Form */}
          <div className="bg-white p-6 rounded-xl shadow max-w-4xl">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Add Product</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" className="p-3 rounded-lg border dark:text-white" required />
              <input type="text" name="slug" value={product.slug} onChange={handleChange} placeholder="Slug" className="p-3 rounded-lg border dark:text-white" required />
              <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" className="p-3 rounded-lg border dark:text-white col-span-2" rows="3"></textarea>
              <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" className="p-3 rounded-lg border  dark:text-white" />
              <input type="text" name="brand" value={product.brand} onChange={handleChange} placeholder="Brand" className="p-3 rounded-lg border  dark:text-white" />
              <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" className="p-3 rounded-lg border  dark:text-white" />
              <input type="number" name="stock" value={product.stock} onChange={handleChange} placeholder="Stock" className="p-3 rounded-lg border dark:text-white" />
              <input type="number" name="sold" value={product.sold} onChange={handleChange} placeholder="Sold" className="p-3 rounded-lg border dark:text-white" />
              <input type="number" name="ratings" value={product.ratings} onChange={handleChange} placeholder="Ratings" className="p-3 rounded-lg border dark:text-white" />
              <input type="number" name="numReviews" value={product.numReviews} onChange={handleChange} placeholder="Number of Reviews" className="p-3 rounded-lg border dark:text-white" />
              <input type="text" name="productId" value={product.productId} onChange={handleChange} placeholder="Product ID" className="p-3 rounded-lg border dark:text-white" />
              {product.images.map((img, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={`Image URL ${i + 1}`}
                  value={img}
                  onChange={(e) => handleArrayChange(e, 'images', i)}
                  className="p-3 rounded-lg border dark:text-white"
                />
              ))}
              {product.tags.map((tag, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={`Tag ${i + 1}`}
                  value={tag}
                  onChange={(e) => handleArrayChange(e, 'tags', i)}
                  className="p-3 rounded-lg border dark:text-white"
                />
              ))}
              <label className="flex items-center gap-2">
                <input type="checkbox" name="featured" checked={product.featured} onChange={handleChange} /> Featured
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="isActive" checked={product.isActive} onChange={handleChange} /> Active
              </label>
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition col-span-2">
                Add Product
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  )
}
