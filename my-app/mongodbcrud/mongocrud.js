const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const customers = require('../mongodbcrud/Customer');
const products = require('../mongodbcrud/Product');
const orders = require('../mongodbcrud/Order');

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
