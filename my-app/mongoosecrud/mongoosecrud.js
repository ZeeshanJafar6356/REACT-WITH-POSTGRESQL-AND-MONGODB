const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const customers = require('../mongoosecrud/customers');
const products = require('../mongoosecrud/products');
const orders = require('../mongoosecrud/orders');

const cors = require('cors');
app.use(cors());
app.use('', customers);
app.use('', products);
app.use('', orders);

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`App Started on port ${PORT}`);
  } else {
    console.log('Server Error');
  }
});
