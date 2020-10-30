/*Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
  - document.getElementById()
  - document.getElementsByClassName()
  - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
 */

function alteraTexto(x){
  document.getElementsByTagName("p")[x].innerText = "Me vejo empregado e bem sucedido.";
}
alteraTexto(1);

function alteraCor(){
  document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
}
alteraCor();

function corRed(){
  document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
}
corRed();

function corrigeH(){
  document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript'; 
}
corrigeH();

function corrigeP(){
  let texto = document.getElementsByTagName('p')[0].innerText;
  return document.getElementsByTagName('p')[0].innerHTML = texto.toUpperCase();
}
corrigeP();

function allTagsP(){
  let list = document.getElementsByTagName('p');
  for(let key = 0; key < list.length; key += 1){
    console.log(list[key].innerHTML);
  }
}
allTagsP();