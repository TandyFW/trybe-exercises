const express = require('express');
const controller = require('./controllers/controllerUser');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/user', controller.createUser);

app.put('/user/:id', controller.updateOne);

app.get('/user/:id', controller.findById);

app.get('/user', controller.getAll);

app.listen(PORT, () => console.log(`Servidor aberto na porta ${PORT}`));
