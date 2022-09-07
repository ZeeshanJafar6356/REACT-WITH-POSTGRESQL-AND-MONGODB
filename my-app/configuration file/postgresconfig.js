const Client = require('pg').Client;
const dbclient = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: '123',
  database: 'Shop',
});
dbclient.connect((err) => {
  if (!err) {
    console.log('Connection established With Database');
  } else {
    throw err;
  }
});
module.exports = dbclient;
