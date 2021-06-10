const express = require('express');
const userController = require('./controllers/userController');
const middlewares = require('./middlewares');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/login', middlewares.auth, userController.create);

app.get('/users/me', middlewares.validAuth, userController.getUser);

app.get('/top-secret', middlewares.validAuth, userController.getTopSecret);

app.listen(PORT, () => console.log(`Servidor aberto na rota ${PORT}.`));
