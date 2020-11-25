const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/*
1. Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros,
sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
*/

const turnoManha = (lesson, chave, valor) => lesson[chave] = valor;
turnoManha(lesson2, 'turno', 'manhã');
console.log(lesson2);

/*
2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
*/

const chaves = objeto => Object.keys(objeto);
console.log(chaves(lesson1));

/*
3. Crie uma função para mostrar o tamanho de um objeto.
*/

const tamanho = objeto => Object.keys(objeto).length + Object.values(objeto).length;
console.log(tamanho(lesson1));

/*
4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
*/

const valores = objeto => Object.values(objeto);
console.log(valores(lesson1));

/*
5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.
Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
*/

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3)
};
console.log(allLessons);

/*
6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
*/
const alunos = () => lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes;
console.log(alunos());

/*
7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
*/

const valorPorChave = (objeto, chave) => objeto[Object.keys(objeto)[chave]];
console.log(valorPorChave(lesson1, 0));

/*
8. Crie uma função que verifique se o par (chave / valor) existe na função.
Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
*/

const verificaPar = (objeto, chave, valor) => (objeto[chave] === valor ? true : false);
console.log(verificaPar(lesson3, 'turno', 'noite'));
console.log(verificaPar(lesson3, 'materia', 'Maria Clara'));

/*
Bônus 1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática.
Use o objeto criado no exercício 5.
*/
const matAlunos = (objeto) => {
  const lessons =  Object.keys(objeto);
  let matAlunos= 0;
  for (let index = 0; index < lessons.length; index += 1) {
    objeto[lessons[index]].materia === 'Matemática' ? matAlunos += objeto[lessons[index]].numeroEstudantes : '';
  }
  return matAlunos;
}
console.log(matAlunos(allLessons));

/*
Bônus 2. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora,
as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
*/

const relatorioProf = (objeto, prof) => {
  const lessons =  Object.keys(allLessons);
  let alunos = 0;
  const materias = [];
  for (let index = 0; index < lessons.length; index += 1) {
    if (objeto[lessons[index]].professor === prof) {
      alunos += objeto[lessons[index]].numeroEstudantes;
      materias.push(objeto[lessons[index]].materia);
    }
  }
  newObject = {
    professor: prof,
    aulas: materias,
    estudantes: alunos
  }
  return newObject;
}
console.log(relatorioProf(allLessons, 'Maria Clara'));