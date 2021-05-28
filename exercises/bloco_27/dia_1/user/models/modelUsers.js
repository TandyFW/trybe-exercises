const connection = require('./connection');

const create = async (firstName, lastName, email, password) => {
  const result = await connection()
    .then((db) => db.collection('user').insertOne({ firstName, lastName, email, password }))
    .then((results) => {
      return ({
        id: results.ops[0]._id,
        firstName,
        lastName,
        email,
      })
    });
    return result;
}

const getAll = async () => {
  const result = await connection()
    .then((db) => db.collection('user').find().toArray());
  console.log(result);
  return result;
}

module.exports = {
  create,
  getAll,
}