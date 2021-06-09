const express = require('express');
const userController = require('./controllers/userController');
const middlewares = require('./middlewares');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/login', middlewares.auth, userController.create);

app.get('/users/me', middlewares.validAuth);

app.listen(PORT, () => console.log(`Servidor aberto na rota ${PORT}.`));

// 28.1 - questão 7