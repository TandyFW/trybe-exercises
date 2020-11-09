window.onload = function() {
  document.body.style.backgroundColor = localStorage.getItem('bgColor');
  document.body.style.color = localStorage.getItem('fontColor');
  document.body.style.fontSize = localStorage.getItem('fontSize');
  document.body.style.lineHeight = localStorage.getItem('lineHeight');
  document.body.style.fontFamily = localStorage.getItem('fontFamily');
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

  let btnfontSize = document.querySelector('#btn-fontSize');
  btnfontSize.addEventListener('click', function() {
    let fontSize = document.querySelector('#fontSize').value;
    document.body.style.fontSize = fontSize + 'px';
    localStorage.setItem('fontSize', fontSize + 'px');
  });

  let btnlineHeight = document.querySelector('#btn-lineHeight');
  btnlineHeight.addEventListener('click', function() {
    let lineHeight = document.querySelector('#lineHeight').value;
    document.body.style.lineHeight = lineHeight;
    localStorage.setItem('lineHeight', lineHeight);
  });

  let btnfontFamily = document.querySelector('#btn-fontFamily');
  btnfontFamily.addEventListener('click', function() {
    let fontFamily = document.querySelector('#fontFamily').value;
    document.body.style.fontFamily = fontFamily;
    localStorage.setItem('fontFamily', fontFamily);
  });
}
btnEvents();