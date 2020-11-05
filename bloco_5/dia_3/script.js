function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
/* 
01. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro.
Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas
da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.

Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
*/

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function dezDays () {
  let ulDays = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let liDays = document.createElement('li');
    if (day === 24 || day === 31) {
      liDays.className = 'day holiday';
      liDays.innerHTML = day;
      ulDays.appendChild(liDays);
    } else if (day === 4 || day === 11 || day === 18) {
      liDays.className = 'day friday-day';
      liDays.innerHTML = day;
      ulDays.appendChild(liDays);
    } else if (day === 25) {
      liDays.className = 'day holiday friday-day';
      liDays.innerHTML = day;
      ulDays.appendChild(liDays);
    } else {
    liDays.className = 'day';
    liDays.innerHTML = day;
    ulDays.appendChild(liDays);
    }
  }
}
dezDays();

/*
02. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday".
Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
*/

function btnFeriados(string) {
  let div = document.querySelector('.buttons-container');
  let btn = document.createElement('button');
  btn.textContent = string;
  btn.id = 'btn-holiday';
  div.appendChild(btn);
}
btnFeriados('Feriados');

/*
03. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".
*/

function btnEventHolidays () {
  let btn = document.querySelector('#btn-holiday');
  btn.addEventListener('click', function(){
    let holidays = document.querySelectorAll('.holiday');
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor === "lightgreen") { 
      holidays[index].style.backgroundColor = "rgb(238,238,238)";
    } else {
      holidays[index].style.backgroundColor = "lightgreen";
    }
    }
  });
}
btnEventHolidays();

/*
04. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday".
Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
*/

function friday(string) {
  let div = document.querySelector('.buttons-container');
  let btn = document.createElement('button');
  btn.id = 'btn-friday';
  btn.textContent = string;
  div.appendChild(btn);
}
friday("Sexta-feira");

/*
05. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

function btnSextou () {
  let btn = document.querySelector('#btn-friday');
  let dezFridays = [4, 11, 18, 25];
  btn.addEventListener('click', function(){
    let sextas = document.querySelectorAll('.friday-day');
    for (let index = 0; index < sextas.length; index += 1) {
      if (sextas[index].innerHTML === "Sextou!") { 
        sextas[index].innerHTML = dezFridays[index];
    } else {
      sextas[index].innerHTML = "Sextou!";
    }
    }
  });
}
btnSextou();

/*
06. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário,
o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target.
*/

function zoom() {
  document.addEventListener('mouseover', function(e){
    if (e.target.className == 'day') {
      e.target.style.fontSize = '40px';
    }
  });
  document.addEventListener('mouseout', function(e){
    if (e.target.className == 'day') {
      e.target.style.fontSize = '20px';
      console.log(e.target.innerHTML);
    }
  });
}
zoom();