const { Router } = require('express');
const router = Router();
const client = require('../configuration file/postgresconfig');
const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/products', (req, res) => {
  client.query(`select * from products `, (err, result) => {
    if (err) {
      console.log('error');
    } else {
      console.log('Data Fetched');
      res.send(result.rows);
    }
  });
});
router.get('/products/:id', (req, res) => {
  client.query(
    `SELECT * FROM products WHERE id=${req.params.id}`,
    (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log('Data Fetched');
        res.send(result.rows);
      }
    }
  );
});
router.post('/products', (req, res) => {
  const product = req.body;
  client.query(
    `INSERT into products(name,description,price,color)VALUES( '${product.name}', '${product.description}','${product.price}', '${product.color}')`,
    (err) => {
      if (err) {
        console.log(err.message);
      } else {
        res.send('Product Added successfully');
        console.log(product);
      }
    }
  );
});
router.put('/products/:id', (req, res) => {
  let product = req.body;
  let updateQuery = `update products
                       set name = '${product.name}',
                       description = '${product.description}',
                       price = '${product.price}',
                       color = '${product.color}'
                       where id = ${product.id}`;
  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send(product);
      console.log('SUCCESFULLY UPDATE');
    } else {
      console.log(err.message);
    }
  });
});
router.delete('/products/:id', (req, res) => {
  client.query(
    `DELETE FROM products WHERE id=${req.params.id}`,
    (err, result) => {
      if (err) {
        console.log('error');
      } else {
        console.log('DELETED');
        res.send(result);
      }
    }
  );
});
module.exports = router;
