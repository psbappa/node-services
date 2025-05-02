const express = require('express');
const router = express.Router();
const checkRole = require('../middlewares/checkRole');
const {
  createItem,
  getItems,
  updateItem,
  deleteItem
} = require('../controllers/itemController');
const auth = require('../middlewares/authMiddleware');

router.use(auth); // protect all routes

router.post('/', createItem);
router.get('/', getItems);
router.put('/:id', updateItem);
router.delete('/:id', checkRole('admin'), deleteItem);    // router.delete('/:id', deleteItem);

module.exports = router;
