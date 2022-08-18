"use strict";

// Below algorithm has O(n). This is a better approach than nested array approach.

const sameFrequencyCounter = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const obj1 = {};
  const obj2 = {};

  for (let item of arr1) {
    if (obj1.hasOwnProperty(item)) {
      obj1[item] += 1;
    } else {
      obj1[item] = 1;
    }
  }

  for (let item of arr2) {
    if (obj2.hasOwnProperty(item)) {
      obj2[item] += 1;
    } else {
      obj2[item] = 1;
    }
  }

  for (let item in obj1) {
    if (!obj2.hasOwnProperty(item ** 2)) {
      return false;
    }
    if (obj1[item] !== obj2[item ** 2]) {
      return false;
    }
  }
  return true;
};

console.log(sameFrequencyCounter([1, 3, 2, 4, 4, 2], [1, 9, 16, 4, 16, 4]));
