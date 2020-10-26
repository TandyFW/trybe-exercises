let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = null;

// 01. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
for(let pos in numbers){
    console.log(numbers[pos]);
}

// 02. Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
for(let pos in numbers){
    soma += numbers[pos];
}
console.log(soma);

// 03. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
media = soma / numbers.length
console.log(media);

// 04. Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if(media > 20){
    console.log("Valor maior que 20");
} else{
    console.log("Valor meno ou igual a 20");
}

// 05. Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let higherScore = numbers[0];
for(let pos = 1; pos < numbers.length; pos++){
    if(higherScore < numbers[pos]){
        higherScore = numbers[pos];
    }
}
console.log(higherScore);

// 06. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impar = 0;
for(let pos in numbers){
    if(numbers[pos] % 2 == 1){
        impar++;
    }
}
if(impar == 0){
    console.log("nenhum valor ímpar encontrado");
} else{
    console.log(impar);
}

// 07. Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let lowerScore = numbers[0];
for(let pos = 1; pos < numbers.length; pos++){
    if(lowerScore > numbers[pos]){
        lowerScore = numbers[pos];
    }
}
console.log(lowerScore);

// 08. Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;

let array25 = [];
for(let pos = 0; pos < 25; pos += 1){
    array25[pos] = pos;
}
console.log(array25);

// 09. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
for(let pos = 0; pos < array25.length; pos += 1){
    console.log(array25[pos] / 2);
}