import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

const categories = [
  'Mobiles',
  'Laptops',
  'Fashion',
  'Electronics',
  'Home & Kitchen',
  'Books',
  'Fitness',
  'Beauty',
  'Toys',
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="sm:hidden p-2 m-2 text-gray-700"
        onClick={() => setOpen(true)}
      >
        {/* <Menu size={24} /> */}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={() => setOpen(false)}>
          <div
            className="bg-white w-64 h-full p-4 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Categories</h2>
              {/* <button onClick={() => setOpen(false)}><X /></button> */}
            </div>
            <ul className="space-y-2">
              {categories.map((cat, i) => (
                <li key={i} className="text-gray-700 hover:text-blue-600 cursor-pointer">
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden sm:block w-60 bg-white h-full shadow sticky top-20 p-4">
        <h2 className="text-lg font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((cat, i) => (
            <li key={i} className="text-gray-700 hover:text-blue-600 cursor-pointer">
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
