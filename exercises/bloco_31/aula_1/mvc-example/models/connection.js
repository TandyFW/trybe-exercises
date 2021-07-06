const mysql = require('mysql2/promise');
require('dotenv').config();

const myConnection = {
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

const connection = mysql.createPool(myConnection);

module.exports = connection;
