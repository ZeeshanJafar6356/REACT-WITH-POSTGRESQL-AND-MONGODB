const { Router } = require('express');
const router = Router();
const client = require('../configuration file/postgresconfig');
const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/customers', (req, res) => {
  client.query(`select * from customers `, (err, result) => {
    if (err) {
      res.status(500).send('Server Error');
    } else {
      console.log('Data Fetched');
      res.status(200).json(result.rows);
    }
  });
});
router.get('/customers/:cust_id', (req, res) => {
  client.query(
    `SELECT * FROM customers WHERE cust_id=${req.params.cust_id}`,
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
router.post('/customers', (req, res) => {
  const customer = req.body;
  client.query(
    `INSERT into customers(name,phone,email,address)VALUES( '${customer.name}', '${customer.phone}','${customer.email}', '${customer.address}')`,
    (err) => {
      if (err) {
        // console.log(err.message);
        res.status(500).send('Server Error');
      } else {
        res.send('Customer Added successfully');
        console.log(customer);
      }
    }
  );
});
router.put('/customers/:cust_id', (req, res) => {
  let customer = req.body;
  let updateQuery = `update customers
                       set name = '${customer.name}',
                       phone = '${customer.phone}',
                       email = '${customer.email}',
                       address = '${customer.address}'
                       where cust_id = ${customer.cust_id}`;
  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send(customer);
      console.log('SUCCESFULLY UPDATE');
    } else {
      res.status(500).send('Server Error');
    }
  });
});

router.delete('/customers/:cust_id', (req, res) => {
  client.query(
    `DELETE FROM customers WHERE cust_id=${req.params.cust_id}`,
    (err, result) => {
      if (err) {
        res.status(500).send('Server Error');
      } else {
        console.log('DELETED');
        res.send(result);
      }
    }
  );
});
module.exports = router;
