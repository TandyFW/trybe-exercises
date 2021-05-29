const connection = require('./connection');
const { ObjectId } = require('mongodb');

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
  return result;
}

const findById = async (userId) => {
  try{
    const result = await connection()
      .then((db) => db.collection('user').findOne({ _id: ObjectId(userId) }));
    console.log(result);
    return result;
  } catch(err) {
    return null;
  }
}

const updateOne = async (userId, changes) => {
  try {
    const result = await connection()
      .then((db) => db.collection('user').updateOne({ _id: ObjectId(userId)}, { $set: changes}));
    return changes;
  } catch(err) {
    return null;
  }
}

module.exports = {
  create,
  getAll,
  findById,
  updateOne,
}