// const mysql = require('mysql2/promise');

// const db = {
//   host: 'localhost',
//   user: 'root',
//   password: 'Admin123.',
//   database: 'bloco_27',
// };

// const connection = mysql.createPool(db);

// module.exports = connection;

const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

const connection = () => {
  return MongoClient
  .connect(MONGO_DB_URL, OPTIONS)
  .then((conn) => conn.db('model_example'))
  .catch((err) => {
    console.error(err);
    process.exit();
  });
}

module.exports = connection;
