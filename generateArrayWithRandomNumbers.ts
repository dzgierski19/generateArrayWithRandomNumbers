const generateArrayOfArrays = (
  howManyArrays: number,
  howManyNumbers: number,
  min: number,
  max: number
) => {
  isInputInteger(howManyArrays);
  isNumberHigherThanZero(howManyArrays);
  const arraySum: number[][] = Array.from(
    { length: howManyArrays },
    (k) => (k = generateArrayWithRandomNumbers(howManyNumbers, min, max))
  );
  return arraySum;
};

const generateArrayWithRandomNumbers = (
  howManyNumbers: number,
  min: number,
  max: number
) => {
  isInputInteger(howManyNumbers);
  isNumberHigherThanZero(howManyNumbers);
  const arrayZero: number[] = Array.from(
    { length: howManyNumbers },
    (k) => (k = generateRandomNumberInRangeMinMax(min, max))
  );
  return arrayZero;
};

const generateRandomNumberInRangeMinMax = (min: number, max: number) => {
  isInputInteger(min);
  isInputInteger(max);
  isMinMoreThanMax(min, max);
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

const isMinMoreThanMax = (min: number, max: number) => {
  if (max - min <= 0) {
    throw new Error("You must provide max higher than min");
  }
};

const isNumberHigherOrEqualZero = (input: number) => {
  if (input < 0) {
    throw new Error("You must provide number higher or equal 0");
  }
};

const isNumberHigherThanZero = (input: number) => {
  if (input <= 0) {
    throw new Error("You must provide number higher than 0");
  }
};

const isInputInteger = (input: number) => {
  if (!Number.isInteger(input)) {
    throw new Error("You must provide integer");
  }
};

console.log(generateArrayOfArrays(4, 10, -10, 5));
