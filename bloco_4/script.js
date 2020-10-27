// 01. Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 

// Médoto com um for dentro do outro, com a variável asterisco dentro do primeiro for para que ela reset e o segundo for repita o processo de cálculo e exibição.
let n = 4;
for(let x = 0; x < n; x+= 1){
  let asterisco = "";
  for(let i = 0;i < n; i += 1){
    asterisco += "*";
  }
  console.log(asterisco);
}

// Método com dois for separados, um para preencher a variável asterisco e outro para exibí-la n vezes.
let n = 4;
let asterisco = "";
for(let i = 0;i < n; i += 1){
  asterisco += "*";
}
for(let i = 0; i< n; i += 1){
  console.log(asterisco);
}

// 02. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let n = 5;
let asterisco = "";
for(let i = 0; i < n; i += 1){
  asterisco += "*";
  console.log(asterisco);
}

// 03. Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let asterisco = "";
for(let i = 0; i < n; i += 1){
  
}