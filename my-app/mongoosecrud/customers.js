
const express = require('express');
const dbMongoose = require('../configuration file/mongooseatlas');
const Customers = require('../schemas/customers');

const routers = express.Router();
routers.use(express.json());

/////FindingData in DB

// get api
routers.get('/customers', async (req, res) => {
  try {
    let data = dbMongoose();
    data = await Customers.find();
    res.send(data);
    console.log(data);
  } catch (error) {}
});
/get by id

routers.get('/customers/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    console.log(_id);
    data = await Customers.findById(_id);
    res.send(data);
  } catch (error) {}
});
/put api
routers.put('/customers/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    data = await Customers.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201);
    res.send(data);
  } catch (e) {
    res.status(404).send(e);
  }
});
/ patch api
routers.patch('/customers/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    data = await Customers.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201);
    res.send(data);
  } catch (e) {
    res.status(404).send(e);
  }
});

// adding data in DB

routers.post('/customers', async (req, res) => {
  try {
    let data = dbMongoose();
    data = new Customers(req.body);
    let result = await data.save();
    console.log('product added');
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});


routers.delete('/customers/:id', async (req, res) => {
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



module.exports = routers;
