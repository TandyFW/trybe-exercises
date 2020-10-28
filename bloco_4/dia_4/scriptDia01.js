let a = 5;
let b = 10;
let c = 7;

// 01. Faça cinco programas, um para cada operação aritmética básica.
// Adição
function sum(a, b){
  return a + b;
}
console.log(sum(a, b));
// Subtração
function sub(a, b){
  return a - b;
}
console.log(sub(a, b));
// Multiplicação
function mult(a, b){
  return a * b
}
console.log(mult(a, b));
// Divisão
function div(a, b){
  return a / b;
}
console.log(div(a, b));
// 02. Faça um programa que retorne o maior de dois números.
function maiorDosDois(a, b){
  if(a > b){
    return a;
  } else{
    return b;
  }
}
console.log(maiorDosDois(a, b));
// 03. Faça um programa que retorne o maior de três números.
function maiorDosTres(a, b, c){
  if(a > b && a > c){
    return a;
  } else if(b > a && b > c){
    return b;
  } else{
    return c;
  }
}
console.log(maiorDosTres(a, b, c));
// 4. Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
let x = -15;

function positiveOuNegative(x){
  if(x > 0){
    return "positive";
  } else if(x < 0){
    return "negative";
  } else{
    return "zero";
  }
}
console.log(positiveOuNegative(x));
// 5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário. Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.
let anguloA = 30;
let angulaB = 60;
let anguloC = 90;

function ehTriangulo(AnguloA, AnguloB, AnguloC){
  if(angulaA + angulaB + anguloC == 180){
    return true;
  } else{
    return "Error";
  }
}
console.log(ehTriangulo(anguloA, angulaB, anguloC));
// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals
let piece = "peAo";

function pecaXadrez(piece){
  switch(piece.toLowerCase()){
    case "peao":
        return "Frente";
        break;
    case "torre":
        return "Vertical e Horizontal";
        break;
    case "bispo":
        return "Diagonal";
        break;
    case "cavalo":
        return "L";
        break;
    case "rainha":
        return "Horizontal, vertical e diagonal, quantas casas quiser";
        break;
    case "rei":
        return "Horizontal, vertical e diagonal, apenas uma casa";
        break;
    default:
        return "Error";
        break;
  }
}
console.log(pecaXadrez(piece));
// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
let nota = 50;

function notaAF(nota){
  if(nota >= 90){
    console.log("A");
  } else if(nota >= 80){
    console.log("B");
  } else if(nota >= 70){
    console.log("C");
  } else if(nota >= 60){
    console.log("D");
  } else if(nota >= 50){
    console.log("E");
  } else if(nota < 50){
    console.log("F");
  } else if(nota < 0 || nota > 100){
    console.log("Error");
  }
}
console.log(notaAF(nota));
// 8. Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.

function existePar(a, b, c){
  if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
      return true;
  } else{
      return false;
  }
}
console.log(existePar(a, b, c));
// 9. Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// Bonus: use somente um if.

function existeImpar(a, b, c){
  if(a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
      return true;
  } else{
      return false;
  }
}
console.log(existeImpar(a, b, c));
// 10. Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

let custo = 25;
let valor = 88;
let imposto = 0.2;
// let valorCustoTotal = custo + (custo * imposto);
// let lucro = valor - valorCustoTotal;
// let lucroTotal = lucro * 1000;
// console.log(lucroTotal);

function lucroTotal(custo, valor, imposto){
  return ((valor - (custo + (custo * imposto)))* 1000)
}
console.log(lucroTotal(custo, valor, imposto));
// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,00 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

let salarioBruto = 3500;

console.log("Salário Líquido: R$" + calcSalarioLiquido(salarioBruto));
console.log("Salário Líquido descontado pagamento da Trybe: R$" + (calcSalarioLiquido(salarioBruto) - descontoTrybe(salarioBruto)));

function calcSalarioLiquido(salarioBruto){
  let salarioLiquido = salarioBruto - calcInss(salarioBruto) - calcIR(salarioBruto);
  return salarioLiquido;
}

function calcInss(salarioBruto){
  let inss;
  if(salarioBruto <= 1556.94){
      return inss = salarioBruto * 0.08;
  } else if(salarioBruto <= 2594.92){
      return inss = salarioBruto * 0.09;
  } else if(salarioBruto <= 5189.82){
      return inss = salarioBruto * 0.11;
  } else if(salarioBruto > 5189.82){
      return inss = 570.88;
  } else{
      return "Error";
  }
}

function calcIR(salarioBruto){
  let ir;
  let salarioBase = salarioBruto - calcInss(salarioBruto);
  if(salarioBase <= 1903.98){
      return ir = 0;
  } else if(salarioBase <= 2826.65){
      return ir = (salarioBase * 0.075) - 142.8;
  } else if(salarioBase <= 3754.05){
      return ir = (salarioBase * 0.15) - 354.8;
  } else if(salarioBase <= 4664.68){
      return ir = (salarioBase * 0.225) - 636.13;
  } else if(salarioBase > 4664.68){
      return ir = (salarioBase * 0.275) - 869.36;
  }
}

function descontoTrybe(salarioBruto){
  let trybe = salarioBruto * 0.17;
  return trybe;
}