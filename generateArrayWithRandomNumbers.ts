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

// console.log(generateArrayWithRandomNumbers(10, 2, 10));

const generateArrayOfArrays = (
  howManyArrays: number,
  howManyNumbers: number,
  min: number,
  max: number
) => {
  let arrayZero: number[] = [];
  let arraySum: number[][] = [];
  const generateRandomNumber = () => {
    for (let i = 0; i < howManyNumbers; i++) {
      arrayZero.push(Math.floor(Math.random() * (max + 1 - min) + min));
    }
    return arrayZero;
  };
  for (let i = 0; i < howManyArrays; i++) {
    arraySum.push(generateRandomNumber());
  }
  return arraySum;
};

console.log(generateArrayOfArrays(10, 10, 2, 10));
