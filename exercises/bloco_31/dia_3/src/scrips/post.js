const socket = window.io();

const likeIcon = document.getElementById('likeIcon');
likeIcon.addEventListener('click', (e) => {
  socket.emit('likePost');
  return false;
});

const updateLikes = (value) => {
  const likes = document.getElementById('currentLikes');
  likes.innerHTML = value;
}

socket.on('updateLikes', (newValue) => updateLikes(newValue));
