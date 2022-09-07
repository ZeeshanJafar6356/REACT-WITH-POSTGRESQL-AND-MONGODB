const { MongoClient } = require('mongodb');

const url =
  'mongodb+srv://zeeshan:test123@test.t97whfr.mongodb.net/test?retryWrites=true&w=majority';

async function dbConnection() {
  try {
    return (await MongoClient.connect(url))
      .db('E-Commerce')
      .collection('products');
  } catch (error) {
    console.log(`Error @ mongodb `, error);
  }
}

const express = require('express');
const { Router } = require('express');
const router = Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(express.json());
const { ObjectId } = require('mongodb');
// const dbConnection = require('../configuration file/mongodbProduct');
// const router = express();

// SIMPLE GET API TO GET ALL DATA
router.get('/products', async (req, res) => {
  let data = await dbConnection();
  data = await data.find().toArray();
  console.log('DATA FETCHED FROM MONGO DB');
  res.send(data);
});
// GET API USING PARAMS
router.get('/products/:_id', async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  let data = await dbConnection();
  data = await data.find({ _id: ObjectId(_id) }).toArray();
  res.send(data);
});

router.post('/products', async (req, res) => {
  console.log(req.body);
  let data = await dbConnection();
  let result = await data.insertOne(req.body);
  res.send(result);
});

//PUT API
router.put('/products/:_id', async (req, res) => {
  const { _id } = req.params;
  let data = await dbConnection();
  let result = await data.updateOne(
    { _id: ObjectId(_id) },
    {
      $set: {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        color: req.body.color,
      },
    }
  );

  console.log('UPDATED');
  console.log(req.body);
  res.send(result);
});

router.delete('/products/:_id', async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  let data = await dbConnection();
  data = await data.deleteOne({ _id: ObjectId(_id) });
  console.log(req.body);
  res.send(data);

module.exports = router;
