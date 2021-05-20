const express = require('express');
const body = require('body-parser');

const app = express();

app.listen(3000, () => console.log('Aplicação rodando na porta 3000'));

app.get('/ping', (req, res) => {
  res.status(200).send({ mesage: 'pong'});
});

app.post('/hello', (req, res) => {
  const obj = req.body.name;
  res.send({ "message": `Hello, ${obj}`});
});
