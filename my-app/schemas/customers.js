const mongoose = require('mongoose');

let customers = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  Name: { type: String, required: true },
  Phone: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Address: { type: String, required: true },
});
module.exports = mongoose.model('customer', customers);
