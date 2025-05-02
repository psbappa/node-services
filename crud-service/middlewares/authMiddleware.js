// middlewares/authMiddleware.js
const axios = require('axios');

module.exports = async function (req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided or invalid login attempts!...' });

  try {
    // console.log('Token:', token);
    const response = await axios.post(`${process.env.AUTH_SERVICE_URL}`, { token });
    console.log('User from auth:', response.data);
    req.user = response.data; // { id, role }
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
