const mysql = require('mysql2/promise');

const db = {
  host: 'localhost',
  user: 'root',
  password: 'Admin123.',
  database: 'bloco_27',
};

const connection = mysql.createPool(db);

module.exports = connection;
