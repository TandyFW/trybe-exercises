const connection = require('./connection');
// const { ObjectId } = require('mongodb');

// const create = async (firstName, lastName, email, password) => {
//   const result = await connection()
//     .then((db) => db.collection('user').insertOne({ firstName, lastName, email, password }))
//     .then((results) => {
//       return ({
//         id: results.ops[0]._id,
//         firstName,
//         lastName,
//         email,
//       })
//     });
//     return result;
// }

const create = async (firstName, lastName, email, password) => {
  try {
    const [result] = await connection.execute(
      'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)', [firstName, lastName, email, password],
    );
    return ({ firstName, lastName, email, password });
    } catch (err) {
      return null;
    }
}

// const getAll = async () => {
//   const result = await connection()
//     .then((db) => db.collection('user').find().toArray());
//   return result;
// }

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT id, first_name, last_name, email, password FROM users_crud.users',
  );
  return result;
}

// const findById = async (userId) => {
//   try{
//     const result = await connection()
//       .then((db) => db.collection('user').findOne({ _id: ObjectId(userId) }));
//     return result;
//   } catch(err) {
//     return null;
//   }
// }

const findById = async (userId) => {
  try {
    const [result] = await connection.execute(
      'SELECT * from users_crud.users WHERE id = ?', [userId],
    );
    return result;
  } catch(err) {
    return null;
  }
}

// const updateOne = async (userId, changes) => {
//   try {
//     const result = await connection()
//       .then((db) => db.collection('user').updateOne({ _id: ObjectId(userId)}, { $set: changes}));
//     return changes;
//   } catch(err) {
//     return null;
//   }
// }

const updateOne = async (userId, { firstName, lastName, email, password }) => {
  try {
    const [result] = await connection.execute(
      'UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
      [firstName, lastName, email, password, userId],
    );
    return ({ firstName, lastName, email, password });
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
