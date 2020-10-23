// 03. Faça um programa que retorne o maior de três números.

let a = 5;
let b = 12;
let c = 3;

if(a > b && a > c){
    return a;
} else if(b > a && b > c){
    return b;
} else{
    return c;
}