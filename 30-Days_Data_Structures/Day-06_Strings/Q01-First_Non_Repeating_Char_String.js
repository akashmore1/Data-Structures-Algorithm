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

console.log(
  findFirstNonRepeatingChar(
    "aakascsdvevevwswfasdawdrwqfopobdofibhiuehgkerjgewjmbjahsdcahckwjfhchkwefhkwefjlkjljkdzkjcwsjkfhsh"
  )
);
