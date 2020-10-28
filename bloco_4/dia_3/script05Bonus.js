// 05. Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

let n = 11;
let controleEspaco = Math.floor(n/2);
let space = "";
let asterisco = "*";
let asteriscoFloor = "*";
let spaceMiddle = " ";

for(let coluna = 0; coluna < n; coluna += 2){ 
  for(let linha = 0; linha < controleEspaco; linha += 1){
     space += " ";
   }
   switch(coluna){
     case 0:
     console.log(space + asterisco + space);
     asteriscoFloor += "**";
     controleEspaco -= 1;
     space = "";
     break;
     case (n-1):
     console.log(space + asteriscoFloor + space);
     spaceMiddle += "  ";
     asteriscoFloor += "**";
     controleEspaco -= 1;
     space = "";
     break;
     default:
     console.log(space + asterisco + spaceMiddle + asterisco + space);
     spaceMiddle += "  ";
     asteriscoFloor += "**";
     controleEspaco -= 1;
     space = "";
   }
}