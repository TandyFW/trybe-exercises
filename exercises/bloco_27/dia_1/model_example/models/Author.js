const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const convertFields = (authorData) => ({
  id: authorData.id,
  fistName: authorData.fist_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
})

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

// const create = async (firstName, middleName, lastName) => connection.execute(
//   'INSERT INTO bloco_27.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
//   [firstName, middleName, lastName],
// );

const create = async (firstName, middleName, lastName) => {
  await connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }));
}

const getAll = async () => {
  // const [authors] = await connection.execute(
  //   'SELECT id, first_name, middle_name, last_name FROM bloco_27.authors;',
  // );
  // return authors.map(convertFields).map(getNewAuthor)
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) => {
      return authors.map(({ _id, firstName, middleName, lastName }) => {
        return getNewAuthor({
        id: _id,
        firstName,
        middleName,
        lastName,
        });
      });
    });
}

const findById = async (id) => {
  // const [authors] = await connection.execute(
  //   'SELECT id, first_name, middle_name, last_name FROM bloco_27.authors WHERE id = ?', [id],
  // );
  // if (authors.length === 0) return null;
  // const { firstName, middleName, lastName } = convertFields(authors[0]);
  // return getNewAuthor({
  //   id,
  //   firstName,
  //   middleName,
  //   lastName,
  // });
  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)));
  if (!authorData) return null;
  const { firstName, middleName, lastName } = authorData;
  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  }); 
}

module.exports = {
  getAll,
  findById,
  create,
  isValid,
}
