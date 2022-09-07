// const mongoose = require('mongoose');
const express = require('express');
const dbMongoose = require('../configuration file/mongooseatlas');
const products = require('../schemas/products');
const app = express();
app.use(express.json());

////////////////////////
/////FindingData in DB
////////////////////////////////////
// get api
// app.get('/:id', async (req, res) => {
app.get('/products', async (req, res) => {
  try {
    let data = dbMongoose();
    data = await products.find();
    res.send(data);
    console.log(data);
  } catch (error) {}
});
/////get by id
// app.get('/:id', async (req, res) => {
app.get('/products/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    console.log(_id);
    data = await products.findById(_id);
    res.send(data);
  } catch (error) {}
});
//put api
app.put('/products/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    data = await products.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201);
    res.send(data);
  } catch (e) {
    res.status(404).send(e);
  }
});
// patch api
app.patch('/products/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    data = await products.findByIdAndUpdate(_id, req.body, {
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
app.post('/products', async (req, res) => {
  try {
    let data = dbMongoose();
    data = new products(req.body);
    let result = await data.save();
    console.log('product added');
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

////////////////////////
/////Deleting Data in DB
////////////////////////////////////
app.delete('/products/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    data = await products.findByIdAndDelete(_id, req.body);
    console.log('Product Deleted');
    res.send(data);
  } catch (e) {
    res.status(404).send(e);
  }
});

app.listen(8080, () => {
  console.log('connected to 8080 port');
});
