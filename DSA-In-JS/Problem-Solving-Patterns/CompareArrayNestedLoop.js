"use strict";

console.log("Hello World!");

// Write a function called "same", which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// Below is nested loop approach, which has complexity of n^2. So this can be considered a naive solution.
const sameNestedArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let num of arr1) {
    const squareNum = num ** 2;

    if (!arr2.includes(squareNum)) {
      return false;
    }

    const correctIndex = arr2.indexOf(num ** 2);
    if (arr2.includes(squareNum)) {
      arr2.splice(correctIndex, 1);
    }
  }

  return true;
};

console.log(sameNestedArray([1, 2, 3, 4], [4, 16, 9, 1]));
console.log(sameNestedArray([1, 2, 3, 16], [4, 9, 1, 12]));
