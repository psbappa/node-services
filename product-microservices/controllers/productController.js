const mongoose = require('mongoose');
const Product = require("../models/productModel");

// Helper function: check if ID is valid MongoDB ObjectId
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No products found" });
    } else {
      res.status(200).json({ success: true, data: products });
      // res.json(products);
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
  // const products = await Product.find();
  // res.json(products);
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const query = isValidObjectId(req.params.id)
      ? { $or: [{ _id: req.params.id }, { productId: req.params.id }] }
      : { productId: req.params.id };

    const product = await Product.findOne(query);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });

    res.status(200).json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
  // const product = await Product.findById(req.params.id);
  // if (!product) return res.status(404).json({ message: 'Not Found' });
  // res.json(product);
};

//  Create a new product
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
  // const product = new Product(req.body);
  // await product.save();
  // res.status(201).json(product);
};

// Update an existing product: // PUT /api/products/:id
exports.updateProduct = async (req, res) => {
  try {
    const query = isValidObjectId(req.params.id)
      ? { $or: [{ _id: req.params.id }, { productId: req.params.id }] }
      : { productId: req.params.id };

    const updatedProduct = await Product.findOneAndUpdate(query, req.body, {
      new: true, // returns updated doc
      runValidators: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.status(200).json({ success: true, product: updatedProduct });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
  // const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  // if (!product) return res.status(404).json({ message: 'Not Found' });
  // res.json(product);
};

// PATCH /api/products/:id
exports.partialUpdateProduct = async (req, res) => {
  try {
    const query = isValidObjectId(req.params.id)
      ? { $or: [{ _id: req.params.id }, { productId: req.params.id }] }
      : { productId: req.params.id };

    const updatedProduct = await Product.findOneAndUpdate(query, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.status(200).json({ success: true, product: updatedProduct });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete a product: // DELETE /api/products/:id
exports.deleteProduct = async (req, res) => {
  try {
    const query = isValidObjectId(req.params.id)
      ? { $or: [{ _id: req.params.id }, { productId: req.params.id }] }
      : { productId: req.params.id };

    const deletedProduct = await Product.findOneAndDelete(query);

    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
  // const product = await Product.findByIdAndDelete(req.params.id);
  // if (!product) return res.status(404).json({ message: 'Not Found' });
  // res.json({ message: 'Deleted successfully' });
};
