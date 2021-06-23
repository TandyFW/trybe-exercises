const express = require('express');
const controller =  require('./controllers/plantsController');
const PORT = 3000;

const app = express();

app.use(express.json());

app.get('/plants', controller.getAllPlants);

app.get('/plant/:id', controller.getPlantById);

app.post('/plant', controller.addPlant);

app.listen(PORT, () => console.log(`Servidor aberto na porta ${PORT}.`));
