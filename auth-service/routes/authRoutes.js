// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const jwt = require('jsonwebtoken');

router.post('/register', register);
router.post('/login', login);

router.post('/verify', (req, res) => {
    const { token } = req.body;
    // console.log('TOKEN:::', token);
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      res.json(decoded); // return { id, role }
    } catch (err) {
      res.status(401).json({ message: 'Invalid token' });
    }
  });

module.exports = router;
