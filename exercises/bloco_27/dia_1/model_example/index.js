const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  if (!author) return res.status(404).json({ message: 'Not found' });
  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  await Author.create(first_name, middle_name, last_name);
  res.status(200).json({ message: 'Autor criado com sucesso.' })
});

app.get('/books/', async (req, res) => {
  const { author_id } = req.query;
  if (!author_id) {
    const books = await Book.getAll();
    return res.status(200).json(books);
  }
  const id = parseInt(author_id, 10);
  const books = await Book.getByAuthorId(id);
  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Book.findById(id);
  if (!books) return res.status(404).json({ message: 'Not found' });
  res.status(200).json(books);
});

app.listen(PORT, () => console.log(`Servidor aberto na porta ${PORT}`));
