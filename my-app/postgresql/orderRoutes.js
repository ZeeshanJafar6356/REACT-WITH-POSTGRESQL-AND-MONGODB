const { Router } = require('express');
const router = Router();
const client = require('../configuration file/postgresconfig');
const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/orders', (req, res) => {
  client.query(`select * from orders `, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log('ORDER DATA FETCHED');
      res.status(200).json(result.rows);
    }
  });
});

router.get('/orders/:id', (req, res) => {
  client.query(
    `SELECT * FROM orders WHERE id=${req.params.id}`,
    (err, result) => {
      if (err) {
        console.log('error');
      } else {
        console.log('Data Fetched');
        res.send(result.rows);
      }
    }
  );
});
router.post('/orders', (req, res) => {
  const order = req.body;
  client.query(
    `INSERT into orders(customer_id,products_id,totalprice,review)VALUES( '${order.customer_id}', '${order.products_id}','${order.totalprice}', '${order.review}')`,
    (err) => {
      if (err) {
        throw err;
      } else {
        res.send('ORDER ADDED Successfully');

        console.log(order);
      }
    }
  );
});
router.put('/orders/:id', (req, res) => {
  let order = req.body;
  let update = `update orders
                       set customer_id = '${order.customer_id}',
                       products_id = '${order.products_id}',
                       totalprice = '${order.totalprice}',
                       review = '${order.review}'
                       where id = ${order.id}`;
  client.query(update, (err, result) => {
    if (!err) {
      res.send(order);
      console.log('SUCCESFULLY UPDATE');
    } else {
      console.log(err.message);
    }
  });
});
router.delete('/orders/:id', (req, res) => {
  client.query(
    `DELETE FROM orders WHERE id=${req.params.id}`,
    (err, result) => {
      if (err) {
        throw err;
      } else {
        res.send('ORDER DELETED');
      }
      console.log(result);
    }
  );
});

module.exports = router;
