const mongoose = require('mongoose');

// Nested review schema
const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true }
}, {
  timestamps: true
});

// Main product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter product name'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please enter product description']
  },
  price: {
    type: Number,
    required: [true, 'Please enter product price'],
    maxLength: [10, 'Price cannot exceed 10 digits']
  },
  brand: {
    type: String,
    required: [true, 'Please enter brand name']
  },
  category: {
    type: String,
    required: [true, 'Please enter product category']
  },
  stock: {
    type: Number,
    required: [true, 'Please enter product stock'],
    default: 0
  },
  sold: {
    type: Number,
    default: 0
  },
  ratings: {
    type: Number,
    default: 0
  },
  numReviews: {
    type: Number,
    default: 0
  },
  reviews: [reviewSchema],
  images: [{
    type: String,
    required: true
  }],
  featured: {
    type: Boolean,
    default: false
  },
  tags: [String],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
