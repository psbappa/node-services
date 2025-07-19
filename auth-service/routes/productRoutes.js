const { authMiddleware, requireAdmin } = require('../middleware/auth');

router.get('/', getAllProducts); // Public
router.get('/:id', getProductById); // Public

// Admin-only routes
router.post('/', authMiddleware, requireAdmin, createProduct);
router.put('/:id', authMiddleware, requireAdmin, updateProduct);
router.delete('/:id', authMiddleware, requireAdmin, deleteProduct);
