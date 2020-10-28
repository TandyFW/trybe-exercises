// 04. Depois, faça uma pirâmide com n asteriscos de base:

let n = 7;
let controleEspaco = n/2;
let space = "";


if(n % 2 == 0){
  let asterisco = "**";
  for(let coluna = 0; coluna < n; coluna += 2){
    for(let linha = 2; linha < controleEspaco; linha += 2){
      space += " ";
    }
    console.log(space + asterisco + space);
    asterisco += "**";
    controleEspaco /= 2;
    space = "";
  }
} else{
  let asterisco = "*";
  for(let coluna = 0; coluna < n; coluna += 2){
    for(let linha = 0; linha < controleEspaco; linha += 1){
      space += "1";
    }
    console.log(space + asterisco + space);
    asterisco += "**";
    controleEspaco -= 1;
    space = "";
  }
}
