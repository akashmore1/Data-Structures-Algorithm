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
    if (charCountObject.hasOwnProperty(char)) {
      charCountObject[char] += 1;
    } else {
      charCountObject[char] = 1;
    }
  }

  return charCountObject;
};

console.log(getCountOfEachString("happy"));
