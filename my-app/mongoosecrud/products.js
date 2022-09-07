
const express = require('express');
const dbMongoose = require('../configuration file/mongooseatlas');
const Product = require('../schemas/products');
const routers = express.Router();
routers.use(express.json());



routers.get('/products', async (req, res) => {
  try {
    let data = dbMongoose();
    data = await Product.find();
    res.send(data);
    console.log(data);
  } catch (error) {}
});
/////get by id

routers.get('/products/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    console.log(_id);
    data = await Product.findById(_id);
    res.send(data);
  } catch (error) {}
});
//put api
routers.put('/products/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    data = await Product.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201);
    res.send(data);
  } catch (e) {
    res.status(404).send(e);
  }
});
// patch api
routers.patch('/products/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    data = await Product.findByIdAndUpdate(_id, req.body, {
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
routers.post('/products', async (req, res) => {
  try {
    let data = dbMongoose();
    data = new Product(req.body);
    let result = await data.save();
    console.log('product added');
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});


routers.delete('/products/:id', async (req, res) => {
  try {
    let data = dbMongoose();
    const _id = req.params.id;
    data = await Product.findByIdAndDelete(_id, req.body);

    console.log('Product Deleted');
    res.send(data);
  } catch (e) {
    res.status(404).send(e);
  }
});



module.exports = routers;
