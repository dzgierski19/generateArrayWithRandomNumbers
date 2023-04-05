const generateArrayWithRandomNumbers = (
  howManyNumbers: number,
  min: number,
  max: number
) => {
  let arrayZero: number[] = [];
  for (let i = 0; i < howManyNumbers; i++) {
    arrayZero.push(Math.floor(Math.random() * (max + 1 - min) + min));
  }
  return arrayZero;
};

console.log(generateArrayWithRandomNumbers(10, 2, 10));

const generateArrayOfArrays = (
  howManyArrays: number,
  howManyNumbers: number,
  min: number,
  max: number
) => {};

// [1,5,4,5,7,9,1,10,5,4]
const generateArrayOfArrays = (
  howManyArrays = 10,
  howManyNumbers = 10,
  min = 1,
  max = 10
) => {};
// 10 arrayów z 10 liczbami z zakresu od 1 do 10
