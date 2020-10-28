// 04. Depois, faça uma pirâmide com n asteriscos de base:

let n = 20;
let controleEspaco = Math.floor(n/2);
let space = "";


if(n % 2 == 0){
  let asterisco = "**";
  for(let coluna = 0; coluna < n; coluna += 2){
    for(let linha = 1; linha < controleEspaco; linha += 1){
      space += " ";
    }
    console.log(space + asterisco + space);
    asterisco += "**";
    controleEspaco -= 1;
    space = "";
  }
} else{
  let asterisco = "*";
  for(let coluna = 0; coluna < n; coluna += 2){
    for(let linha = 0; linha < controleEspaco; linha += 1){
      space += " ";
    }
    console.log(space + asterisco + space);
    asterisco += "**";
    controleEspaco -= 1;
    space = "";
  }
}
