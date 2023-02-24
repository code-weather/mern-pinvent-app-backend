const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
