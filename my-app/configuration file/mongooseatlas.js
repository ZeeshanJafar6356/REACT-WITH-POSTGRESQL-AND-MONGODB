// connecting mongo with mongo atlas using mongoose
const mongoose = require('mongoose');
// const customers = require('../schemas/customers');

async function dbMongoose() {
  mongoose.connect(
    'mongodb+srv://zeeshan:test123@test.t97whfr.mongodb.net/E-Commerce',
    (err) => {
      if (err) {
        console.log('error At Connection');
      } else {
        console.log('connected with MongoDb Atlas');
      }
    }
  );
}
module.exports = dbMongoose;
