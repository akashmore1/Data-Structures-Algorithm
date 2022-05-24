"use strict";

console.log("Hello World!");

// Write a function which takes in a string and returns counts of each character in the string.

const getCountOfEachString = (str) => {
  // Make a object to return at the end
  // Loop over string
  // If char is a key in object, add one to count
  // If char is not in object, add it ti object and set it to 1.

  const charCountObject = {};

  for (let char of str) {
    const lowerCaseChar = char.toLowerCase();
    if (/[a-z0-9]/.test(lowerCaseChar)) {
      if (charCountObject.hasOwnProperty(lowerCaseChar)) {
        charCountObject[lowerCaseChar] += 1;
      } else {
        charCountObject[lowerCaseChar] = 1;
      }
    }
  }

  return charCountObject;
};

console.log(getCountOfEachString("A happy Holidays Sundays!!!"));
