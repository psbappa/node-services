// seed.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/productModel');
const products = require('./data/products');

dotenv.config(); // Load .env

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ MongoDB connected for seeding...");
  seedProducts();
}).catch(err => {
  console.error("❌ MongoDB connection error:", err);
});

async function seedProducts() {
  try {
    // Step 1: Remove existing products
    await Product.deleteMany(); // Clear existing

    // Step 2: Insert one-by-one so pre-save runs
    for (let item of products) {
      const product = new Product(item);
      await product.save(); // this will run slug pre-save hook
    }

    console.log(`🌱 Seeded ${products.length} products successfully!`);
    process.exit();

    // const inserted = await Product.insertMany(products);
    // console.log(`✅ ${inserted.length} products inserted.`);
    // process.exit();
  } catch (err) {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  }
}







// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Product = require('./models/productModel');
// const connectDB = require('./config/db');
// const products = require('./data/products');

// dotenv.config(); // Load .env

// connectDB(); // MongoDB connect

// const importData = async () => {
//   try {
//     await Product.deleteMany(); // Clear old data
//     await Product.insertMany(products); // Insert dummy products

//     console.log('✅ Dummy products seeded successfully!');
//     process.exit();
//   } catch (error) {
//     console.error('❌ Seeding failed:', error);
//     process.exit(1);
//   }
// };

// importData();
