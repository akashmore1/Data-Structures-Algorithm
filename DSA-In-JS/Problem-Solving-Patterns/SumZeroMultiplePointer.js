"use strict";

// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

const sumZero = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (arr[start] + arr[end] !== 0) {
    if (arr[start] > arr[end]) {
      return "No pair exist";
    } else if (arr[start] + arr[end] > 0) {
      end = end - 1;
    } else if (arr[start] + arr[end] < 0) {
      start = start + 1;
    }
  }
  return `${arr[start]}, ${arr[end]}`;
};

console.log(sumZero([-4, -3, -2, -1, 1, 6]));
