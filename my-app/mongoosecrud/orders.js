// const mongoose = require('mongoose');
const express = require('express');
const dbMongoose = require('../configuration file/mongooseatlas');
const orders = require('../schemas/orders');
const routers = express.Router();
routers.use(express.json());
// const routers = express();
// routers.use(express.json());

////////////////////////
/////FindingData in DB
////////////////////////////////////
// get api
// routers.get('/:id', async (req, res) => {
routers.get('/orders', async (req, res) => {
  try {
    let data = dbMongoose();
    data = await orders.find();
    res.send(data);
    console.log(data);
  } catch (error) {}
});
/////get by id
// routers.get('/:id', async (req, res) => {
routers.get('/orders/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    console.log(_id);
    data = await orders.findById(_id);
    res.send(data);
  } catch (error) {}
});
//put api
routers.put('/orders/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    data = await orders.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201);
    res.send(data);
  } catch (e) {
    res.status(404).send(e);
  }
});
// patch api
routers.patch('/orders/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    data = await orders.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201);
    res.send(data);
  } catch (e) {
    res.status(404).send(e);
  }
});

// adding data in DB
///////////////////////////
////constraints are used here
routers.post('/orders', async (req, res) => {
  try {
    let data = dbMongoose();
    data = new orders(req.body);
    let result = await data.save();
    console.log('product added');
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

////////////////////////
routers.delete('/orders/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    data = await orders.findByIdAndDelete(_id, req.body);
    console.log('Customer Deleted');
    res.send(data);
  } catch (e) {
    res.status(404).send(e);
  }
});

// routers.listen(8080, () => {
//   console.log('connected to 8080 port');
// });
module.exports = routers;
