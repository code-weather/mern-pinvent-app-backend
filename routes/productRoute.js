const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const { createProduct } = require('../controllers/productController');
const { upload } = require('../utils/fileUpload');

router.post('/', protect, upload.single('image'), createProduct); // upload.array('image') - if you want to upload multiple files

module.exports = router