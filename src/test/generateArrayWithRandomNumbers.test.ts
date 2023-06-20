import { generateArrayOfArrays } from "../app/generateArrayWithRandomNumbers";

describe("generateArrayWithRandomNumbers testing", () => {
  describe("it returns correct value when", () => {
    it("should return proper number of arrays", () => {
      const result = generateArrayOfArrays(6, 10, -10, 5);
      const howManyArraysInResult = result.length;
      expect(howManyArraysInResult).toBe(6);
    });
    it("should return proper number of elements in arrays", () => {
      const result = generateArrayOfArrays(6, 10, -10, 5);
      const randomNumber = Math.floor(Math.random() * result.length);
      const randomElementInArray = result[randomNumber];
      const howManyNumbersInFirstElement = randomElementInArray.length;
      expect(howManyNumbersInFirstElement).toBe(10);
    });
    it("should return proper element higher or equal min in array elements", () => {
      const result = generateArrayOfArrays(6, 10, -10, 5);
      const randomNumber = Math.floor(Math.random() * result.length);
      const randomElementInArray = result[randomNumber];
      const everyElement = (element) => element >= -10;
      const areElementsBiggerThanMin = randomElementInArray.every(everyElement);
      expect(areElementsBiggerThanMin).toBe(true);
    });
    it("should return proper element less or equal max in array elements", () => {
      const result = generateArrayOfArrays(6, 10, -10, 5);
      const randomNumber = Math.floor(Math.random() * result.length);
      const randomElementInArray = result[randomNumber];
      const everyElement = (element) => element <= 5;
      const areElementsLessThanMax = randomElementInArray.every(everyElement);
      expect(areElementsLessThanMax).toBe(true);
    });
  });

  describe("it returns error when", () => {
    it("should return error when inputs are not integers", () => {
      function expectErrorFromArraysNumberIsNotInt() {
        generateArrayOfArrays(1.5, 2, 3, 4);
      }
      expect(expectErrorFromArraysNumberIsNotInt).toThrow("");
      function expectErrorFromElementsNumberIsNotInt() {
        generateArrayOfArrays(1, 2.5, 3, 4);
      }
      expect(expectErrorFromElementsNumberIsNotInt).toThrow("");
    });
    it("should return error when inputs are less or equal 0", () => {
      function expectErrorFromArraysNumberIsLessOrEqual0() {
        generateArrayOfArrays(0, 2, 3, 4);
      }
      expect(expectErrorFromArraysNumberIsLessOrEqual0).toThrow("");
      function expectErrorFromElementsNumberIsIsLessOrEqual0() {
        generateArrayOfArrays(1, -10, 3, 4);
      }
      expect(expectErrorFromElementsNumberIsIsLessOrEqual0).toThrow("");
    });
    it("should return error when min number is higher than max number", () => {
      function expectError() {
        generateArrayOfArrays(3, 2, 7, 4);
      }
      expect(expectError).toThrow("");
    });
  });
});
