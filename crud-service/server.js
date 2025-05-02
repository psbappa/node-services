// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const itemRoutes = require('./routes/itemRoutes');

const app = express();
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Routes
app.use('/api/items', itemRoutes);

// Connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('CRUD DB connected');
    app.listen(process.env.PORT, () => {
      console.log(`CRUD service running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log('DB Error:', err));
