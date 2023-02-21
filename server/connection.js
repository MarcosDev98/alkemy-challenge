const { createConnection } = require('mysql');
require('dotenv').config();
const { promisify } = require('util');

const host = process.env.HOST;
const user = process.env.USER_DB;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

const mysqlConnection = createConnection({
  host: host,
  user: user,
  password: password,
  database: database
});

mysqlConnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('DB is connected');
  }
  return;
});

mysqlConnection.query = promisify(mysqlConnection.query);

module.exports = mysqlConnection;