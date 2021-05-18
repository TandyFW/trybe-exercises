// Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
// Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.

const simpsons = require('./simpsons.json');
const fs = require('fs/promises');

// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome .
// Por exemplo: 1 - Homer Simpson .
const questao41 = () => {
  simpsons.map(({ id, name }) => console.log(`${ id } - ${ name }`))
}

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida
// com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado,
// rejeite a Promise com o motivo "id não encontrado".
const questao42 = (family) => {
  return new Promise((resolve, reject) => {
    const bool = simpsons.find(({ id }) => id === family.toString());
    if(!bool) reject(Error('id não encontrado'));
    resolve(bool);
  })
    .then(({ id, name }) => console.log(`${ id } - ${ name }`))
    .catch((err) => console.log(`Erro: ${err.message}`));
}

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
const questao43 = () => {
  const newSimpsons = simpsons.filter((family) => family.id !== "10" && family.id !== "6");
  const path = './simpsons.json';
  fs.writeFile(path, JSON.stringify(newSimpsons));
  // console.log(newSimpsons);
}

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json ,
// contendo as personagens com id de 1 a 4.

const questao44 = () => {
  // const data = JSON.stringify(fs.readFile(simpsons));
  const newData = simpsons.filter(({ id }) => id > 0 && id < 5);
  const path = "./simpsonFamily.json";
  fs.writeFile(path, JSON.stringify(newData));
}

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

const questao45 = () => {
  const character = { id: "11", name: "Nelson Muntz" }
  const data = [...simpsons, character];
  const path = "./simpsonFamily.json";
  fs.writeFile(path, JSON.stringify(data));
}

// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
