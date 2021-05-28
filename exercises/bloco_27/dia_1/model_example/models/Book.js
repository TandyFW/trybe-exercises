const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  // const [books] = await connection.execute(
  //   'SELECT title FROM bloco_27.books;',
  // );
  // return books;
  return connection()
    .then((db) => db.collection('books').find().toArray())
    .then((books) => books.map(({ title }) => {
      return ({ title });
    }));
};

const getByAuthorId = async (id) => {
  // const [books] = await connection.execute(
  //   'SELECT title FROM bloco_27.books WHERE author_id = ?;', [id],
  // );
  // return books;
  return connection()
    .then((db) => db.collection('books').find({ author_id: Number(id) }).toArray());
    // .then((books) => books.map(({title}) => title));
}

const findById = async (id) => {
  // const [books] = await connection.execute(
  //   'SELECT title FROM bloco_27.books WHERE id = ?', [id],
  // );
  // if (books.length === 0) return null;
  // return books;
  return connection()
    .then((db) => db.collection('books').findOne(ObjectId(id)));
}

const create = async (title, author_id) => {
  // await connection.execute(
  //   'INSERT INTO bloco_27.books (title, author_id) VALUES (?, ?)', [title, author_id],
  // );
  return connection()
    .then((db) => db.collection('books').insertOne({ title, author_id }));
}

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  create,
}