let skills = ['html', 'css', 'javascript', 'unix', 'github'];

const replace = string => {
  let newString = 'Tryber x aqui!';
  return newString.replace('x', string);
}

const newString2 = replace('Tandy');
console.log(newString2);

const list = string => {
  skills.sort();
  let newString = `${string}\n Minhas cinco principais habilidades são:\n * ${skills[0]}\n * ${skills[1]}\n * ${skills[2]}\n * ${skills[3]}\n * ${skills[4]}\n`;
  return newString;
}

const newString3 = list(newString2);
console.log(newString3);