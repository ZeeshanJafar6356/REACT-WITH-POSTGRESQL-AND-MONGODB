const mongoose = require('mongoose');

let orders = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,

  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customer',
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
  },
  totalprice: { type: Number, required: true, unique: true },
  review: { type: Number, required: true },
});
// module.exports = mongoose.model('order', orders);
const Order = mongoose.model('order', orders);
// module.exports = mongoose.model('product', products);
module.exports = Order;
