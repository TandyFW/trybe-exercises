module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('likePost', (likes) => {
      const updatedLikes = likes + 1;
      socket.emit('updateLikes', updatedLikes);
    });
  });
};
