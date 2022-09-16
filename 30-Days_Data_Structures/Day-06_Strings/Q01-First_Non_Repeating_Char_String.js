"use strict";

const findFirstNonRepeatingChar = (str) => {
  //   Brute force
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        break;
      }
      if (j === str.length - 1) {
        return str[i];
      }
    }
  }
};

findFirstNonRepeatingChar(
  "aakascsdvevevwswfasdawdrwqfopobdofibhiuehgkerjgewjmbjahsdcahckwjfhchkwefhkwefjlkjljkdzkjcwsjkfhsh"
);

// Optimised

const nonRepeatingCharBest = (str) => {
  const strCount = {};
  let uniqueCharIndex = Infinity;

  for (let i = 0; i < str.length; i++) {
    if (strCount[str[i]]) {
      strCount[str[i]] += 1;
    } else {
      strCount[str[i]] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (strCount[str[i]] === 1 && i < uniqueCharIndex) {
      uniqueCharIndex = i;
    }
  }

  return `${uniqueCharIndex}, ${str[uniqueCharIndex]}`;
};

console.log(
  nonRepeatingCharBest("akashwadqwdiuhidcshdciuhwqeqjkdnkjndjvjnfpe")
);
