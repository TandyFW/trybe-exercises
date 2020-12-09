const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const appendJoke = (joke) => {
  const h2 = document.querySelector('#jokeContainer');
  h2.innerHTML = joke;
}

const fetchJoke = () => {
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
  .then(response => response.json()
  .then(s => appendJoke(s.joke)));  
};

window.onload = () => fetchJoke();