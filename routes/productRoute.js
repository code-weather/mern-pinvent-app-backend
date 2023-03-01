const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const { createProduct, getProducts } = require('../controllers/productController');
const { upload } = require('../utils/fileUpload');

router.post('/', protect, upload.single('image'), createProduct); // upload.array('image') - if you want to upload multiple files
router.get('/', protect, getProducts);

module.exports = router