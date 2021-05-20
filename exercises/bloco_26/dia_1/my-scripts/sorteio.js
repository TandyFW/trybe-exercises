const readline = require('readline-sync');

const sorteio = () => {
  const random = Math.round(Math.random() * 10);
  const input = readline.questionInt('Adivinhe o número entre 0 e 10. ');
  if(input === random) console.log('Parabéns, número correto!');
  if(input !== random) console.log(`Opa, não foi dessa vez. O número era ${random}`);
  const again = readline.question('Jogar novamente? s / n. ');
  if (again === 's') return sorteio();
}

sorteio();
