const mongoose = require('mongoose');

let orders = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  customer_id: { type: Number, required: true },
  product_id: { type: Number, required: true },
  totalprice: { type: Number, required: true, unique: true },
  review: { type: Number, required: true },
});
module.exports = mongoose.model('order', orders);
