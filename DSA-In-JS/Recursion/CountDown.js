"use strict";

// Write a function which takes a number as input and then

const countDown = (num) => {
  if (num <= 0) {
    return;
  }
  console.log(num);
  num--;
  countDown(num);
};

console.log(countDown(6));

// Iterative approach

const countDownItr = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
};

console.log(countDownItr(4));
