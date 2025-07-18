// data/products.js
module.exports = [
  {
    name: "iPhone 15 Pro Max",
    description: "Flagship phone with A17 Bionic chip",
    price: 139999,
    brand: "Apple",
    category: "Smartphones",
    stock: 25,
    images: [
      "https://cdn.apple.com/iphone15-1.jpg",
      "https://cdn.apple.com/iphone15-2.jpg"
    ],
    featured: true,
    tags: ["apple", "ios", "iphone", "pro"],
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    description: "Premium Android phone with AI camera features",
    price: 129999,
    brand: "Samsung",
    category: "Smartphones",
    stock: 40,
    images: [
      "https://cdn.samsung.com/s24-1.jpg",
      "https://cdn.samsung.com/s24-2.jpg"
    ],
    featured: true,
    tags: ["samsung", "android", "flagship"],
  },
  {
    name: "HP Pavilion 15",
    description: "15.6-inch FHD Laptop with Intel Core i7, 16GB RAM",
    price: 64999,
    brand: "HP",
    category: "Laptops",
    stock: 30,
    images: [
      "https://cdn.hp.com/pavilion-1.jpg"
    ],
    featured: false,
    tags: ["laptop", "intel", "hp", "student"],
  }
];
