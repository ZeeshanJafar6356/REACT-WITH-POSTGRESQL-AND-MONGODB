const mongoose = require('mongoose');

let customers = new mongoose.Schema({
  Name: { type: String, required: true },
  Phone: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Address: { type: String, required: true },
});
// module.exports = mongoose.model('customer', customers);
const Customer = mongoose.model('customer', customers);

module.exports = Customer;
