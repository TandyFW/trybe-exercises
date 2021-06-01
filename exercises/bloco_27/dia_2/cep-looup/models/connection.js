const mysql = require('mysql2/promise');

const db = {
  host: 'localhost',
  user: 'root',
  password: 'Admin123.',
  database: 'cep_lookup',
};

const connection = mysql.createPool(db);

module.exports = connection;
