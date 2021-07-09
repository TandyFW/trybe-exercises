const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors =require('cors');

const io = require('socket.io')(http, {
  cors:{
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST'],
  }
});

io.on('connection', (socket) => {
  console.log(`Usuário conectado. ID: ${socket.id}`);
});

app.use(cors());

app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/index.html');
});

require('./sockets/likePost')(io);

http.listen(3001, () => console.log('Servidor aberto na porta 3001'));
