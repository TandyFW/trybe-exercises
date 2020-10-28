let n = 10;
let check = 0;

for(let pos = 1; pos <= n; pos += 1){
  if(n % pos == 0){
    check += 1;
  }
}
if(check == 2){
  console.log(n + " é um número primo");
} else{
  console.log(`${n} não é um número primo`);
}