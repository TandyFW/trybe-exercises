const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT title FROM bloco_27.books;',
  );
  return books;
};

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    'SELECT title FROM bloco_27.books WHERE author_id = ?;', [id],
  );
  return books;
}

const findById = async (id) => {
  const [books] = await connection.execute(
    'SELECT title FROM bloco_27.books WHERE id = ?', [id],
  );
  if (books.length === 0) return null;
  return books;
}

module.exports = {
  getAll,
  getByAuthorId,
  findById,
}