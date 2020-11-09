window.onload = function() {
  document.body.style.backgroundColor = localStorage.getItem('bgColor');
  document.body.style.color = localStorage.getItem('fontColor');
}

function btnEvents () {
  let btnbgColor = document.querySelector('#btn-bgColor');
  btnbgColor.addEventListener('click', function() {
    let bgColor = document.querySelector('#bgColor').value;
    document.body.style.backgroundColor = bgColor;
    localStorage.setItem('bgColor', bgColor);
  });

  let btnfontColor = document.querySelector('#btn-fontColor');
  btnfontColor.addEventListener('click', function() {
    let fontColor = document.querySelector('#fontColor').value;
    document.body.style.color = fontColor;
    localStorage.setItem('fontColor', fontColor);
  });

  
}
btnEvents();