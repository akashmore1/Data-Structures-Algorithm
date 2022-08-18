"use strict";

console.log("Hello World!");

const findAnagram = (str1, str2) => {
  const obj1 = {};
  const obj2 = {};

  for (let char of str1) {
    if (obj1.hasOwnProperty(char)) {
      obj1[char] += 1;
    } else {
      obj1[char] = 1;
    }
  }

  for (let char of str2) {
    if (obj2.hasOwnProperty(char)) {
      obj2[char] += 1;
    } else {
      obj2[char] = 1;
    }
  }

  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

console.log(findAnagram("cata", "acat"));
