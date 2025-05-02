// models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  createdBy: String, // User ID
});

module.exports = mongoose.model('Item', itemSchema);
