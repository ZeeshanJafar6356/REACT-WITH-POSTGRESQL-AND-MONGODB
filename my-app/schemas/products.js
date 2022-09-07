const mongoose = require('mongoose');

let products = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  quantity: { type: Number, required: true },
});
const Product = mongoose.model('product', products);
// module.exports = mongoose.model('product', products);
module.exports = Product;
