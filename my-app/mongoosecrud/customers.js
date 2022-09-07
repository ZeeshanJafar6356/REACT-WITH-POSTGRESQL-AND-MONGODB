// const mongoose = require('mongoose');
const express = require('express');
const dbMongoose = require('../configuration file/mongooseatlas');
const customers = require('../schemas/customers');
const app = express();
app.use(express.json());

////////////////////////
/////FindingData in DB
////////////////////////////////////
// get api
// app.get('/:id', async (req, res) => {
app.get('/customers', async (req, res) => {
  try {
    let data = dbMongoose();
    data = await customers.find();
    res.send(data);
    console.log(data);
  } catch (error) {}
});
/////get by id
// app.get('/:id', async (req, res) => {
app.get('/customers/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    console.log(_id);
    data = await customers.findById(_id);
    res.send(data);
  } catch (error) {}
});
//put api
app.put('/customers/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    data = await customers.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201);
    res.send(data);
  } catch (e) {
    res.status(404).send(e);
  }
});
// patch api
app.patch('/customers/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    data = await customers.findByIdAndUpdate(_id, req.body, {
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
app.post('/customers', async (req, res) => {
  try {
    let data = dbMongoose();
    data = new customers(req.body);
    let result = await data.save();
    console.log('product added');
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

////////////////////////
app.delete('/customers/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    data = await customers.findByIdAndDelete(_id, req.body);
    console.log('Customer Deleted');
    res.send(data);
  } catch (e) {
    res.status(404).send(e);
  }
});

app.listen(8080, () => {
  console.log('connected to 8080 port');
});
