"use stict";

// 1st approach
const sumOfNNumbersLoop = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};

console.log(sumOfNNumbersLoop(1000000000));

// 2nd approach
const sumOfNNumbersFormula = (n) => {
  let sum = (n * (1 + n)) / 2;
  return sum;
};

console.log(sumOfNNumbersFormula(1000000000));

// Which one of the above is better?

// What does a better code means?
/*
faster or less memory intesive or more readable
*/
