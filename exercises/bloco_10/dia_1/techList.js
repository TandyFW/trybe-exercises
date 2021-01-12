// Desafio 10
function techList(array, name) {
  // seu código aqui
  let sortedArray = array.sort();
  // let listSkills = [];
  if (sortedArray.length !== 0) {
    return sortedArray.map((skill) =>
      ({
        'tech': skill,
        'name': name,
      }));
  } else {
    return 'Vazio!';
  }
}

module.exports = techList;
