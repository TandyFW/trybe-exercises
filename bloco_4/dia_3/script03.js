// 03. Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let controleLinha = n;
let space = "";
let asterisco = "*";
for(let coluna = 0; coluna < n; coluna += 1){
  for(let linha = 1; linha < controleLinha; linha += 1){
  space += " ";
  }
  controleLinha -= 1;
  console.log(space + asterisco);
  asterisco += "*";
  space = "";
}