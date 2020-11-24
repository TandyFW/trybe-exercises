const btn = document.querySelector('#btn');
const span = document.querySelector('#count');
let clickCount = 0;
btn.addEventListener('click', () => {
  clickCount += 1;
  span.innerHTML = clickCount;
});