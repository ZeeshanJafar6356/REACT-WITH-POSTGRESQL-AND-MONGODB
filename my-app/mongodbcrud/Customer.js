const { MongoClient } = require('mongodb');
const url =
  'mongodb+srv://zeeshan:test123@test.t97whfr.mongodb.net/test?retryWrites=true&w=majority';

async function dbConnection() {
  try {
    return (await MongoClient.connect(url))
      .db('E-Commerce')
      .collection('customers');
  } catch (error) {
    console.log(`Error @ mongodb `, error);
  }
}
// dbConnection();

const express = require('express');

const { Router } = require('express');
const router = Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const { ObjectId } = require('mongodb');
router.use(bodyParser.json());
router.use(express.json());

// SIMPLE GET API TO GET ALL DATA
router.get('/customers', async (req, res) => {
  let data = await dbConnection();
  data = await data.find().toArray();
  console.log('DATA FETCHED FROM MONGO DB');
  res.send(data);
});
// GET API USING PARAMS
router.get('/customers/:_id', async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  let data = await dbConnection();
  data = await data.find({ _id: ObjectId(_id) }).toArray();
  res.send(data);
});

router.post('/customers', async (req, res) => {
  console.log(req.body);
  let data = await dbConnection();
  let result = await data.insertOne(req.body);
  res.send(result);
});

//PUT API
router.put('/customers/:_id', async (req, res) => {
  const { _id } = req.params;
  let data = await dbConnection();
  let result = await data.updateOne(
    { _id: ObjectId(_id) },
    {
      $set: {
        Name: req.body.Name,
        Phone: req.body.Phone,
        Email: req.body.Email,
        Address: req.body.Address,
      },
    }
  );

  console.log('UPDATED');
  console.log(req.body);
  res.send(result);
});


router.delete('/customers/:_id', async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  let data = await dbConnection();
  data = await data.deleteOne({ _id: ObjectId(_id) });
  console.log(req.body);
  res.send(data);
});

module.exports = router;
