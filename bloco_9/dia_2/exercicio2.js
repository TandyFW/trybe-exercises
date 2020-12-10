const somaArray = () => {
  return new Promise((resolve, reject) => {
    let array = [];
    for(let index = 0; index < 10; index += 1) {
      array = [...array, (Math.floor((Math.random() * 50) + 1)) ** 2];
    }
    const sum = array.reduce((acc, curr) => acc + curr);
    sum < 8000 ? resolve(sum) : reject(sum);
  })
  .then((result) => console.log(`Deu certo: ${result}`))
  .catch((error) => console.log(`Error: ${error}`));
}
somaArray();