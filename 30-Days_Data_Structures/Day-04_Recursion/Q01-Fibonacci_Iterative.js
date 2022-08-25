"use strict";

const fibonacci = (num) => {
  if (num <= 1) return num;
  let counter = 1;
  let prev = 0;
  let curr = 1;
  let next;
  while (counter < num) {
    next = prev + curr;
    prev = curr;
    curr = next;
    counter++;
  }
  return curr;
};
