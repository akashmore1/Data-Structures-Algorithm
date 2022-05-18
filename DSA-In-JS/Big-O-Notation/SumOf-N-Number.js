"use stict";

// 1st approach
const sumOfNNumbersLoop = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};

const t1Loop = performance.now();
sumOfNNumbersLoop(1000000000);
const t2Loop = performance.now();

const timeByLoop = (t2Loop - t1Loop) / 1000;
console.log("Time required for loop is ", timeByLoop);

// ******************************************************************************************* //

// 2nd approach
const sumOfNNumbersFormula = (n) => {
  let sum = (n * (1 + n)) / 2;
  return sum;
};

const t1Formula = performance.now();
sumOfNNumbersFormula(1000000000);
const t2Formula = performance.now();

const timeByFormula = (t2Formula - t1Formula) / 1000;
console.log("Time required by formula is ", timeByFormula);

// Which one of the above is better?

// What does a better code means?
/*
faster or less memory intesive or more readable
*/

// To find which solution is faster we can use timer function
// By timer function we can tell that loop approach is significantly slower than formula approach
// time function is not ideal approach because:
// Different machines will record different times
// The same machine will record different times!
// For fast algorithms, speed measurements may not be precise enough?

// Instead we can count number of operations both approaches require:
// First approach has 4 '=', 2 '+' operations.
// But these operation are in loop so number of operation depend on n. We can say that 1st approach has n(4+6) operation.
// Second approach has 4 operation, but they are not dependant on n. No matter what size of n is, this approach will have 4 operations only.

// First operation has big O of n as it depends on n.
// Second approach has Big O of 1 as it is constant time no matter what is value of n.
