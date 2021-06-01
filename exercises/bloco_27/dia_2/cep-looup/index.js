const express = require('express');
const cepController = require('./controllers/cepController');

const app = express();
const PORT = 3000;

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.get('/cep/:cep', cepController.getCep);

app.listen(PORT, () => console.log(`Servidor aberto na porta ${PORT}.`));
