// seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/productModel');
const connectDB = require('./config/db');
const products = require('./data/products');

dotenv.config(); // Load .env

connectDB(); // MongoDB connect

const importData = async () => {
  try {
    await Product.deleteMany(); // Clear old data
    await Product.insertMany(products); // Insert dummy products

    console.log('✅ Dummy products seeded successfully!');
    process.exit();
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

importData();
