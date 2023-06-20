export const generateArrayOfArrays = (
  howManyArrays: number,
  howManyNumbers: number,
  min: number,
  max: number
): number[][] => {
  isInputInteger(howManyArrays);
  isNumberHigherThanZero(howManyArrays);
  return Array.from(
    { length: howManyArrays },
    (k) => (k = generateArrayWithRandomNumbers(howManyNumbers, min, max))
  );
};

const generateArrayWithRandomNumbers = (
  howManyNumbers: number,
  min: number,
  max: number
): number[] => {
  isInputInteger(howManyNumbers);
  isNumberHigherThanZero(howManyNumbers);
  return Array.from(
    { length: howManyNumbers },
    (k) => (k = generateRandomNumberInRangeMinMax(min, max))
  );
};

const generateRandomNumberInRangeMinMax = (min: number, max: number) => {
  isMinMoreThanMax(min, max);
  return Number((Math.random() * (max + 1 - min) + min).toFixed(0));
};

const isMinMoreThanMax = (min: number, max: number) => {
  if (max - min <= 0) {
    throw new Error("You must provide max higher than min");
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

console.log(generateArrayOfArrays(6, 10, -10, 5));
