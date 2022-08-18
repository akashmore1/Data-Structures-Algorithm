"use strict";

// Write a function which takes an array of numbers and a number 'n' as input.
// Function should calculate the maximum sum of 'n' consecutive elements in array.

// Approach with complexity of O(n)  ==> Sliding Window
const maxSubArraySum = (arr, num) => {
  if (arr.length < num) {
    return null;
  }

  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    tempSum = tempSum + arr[i];
  }
  let maxSum = tempSum;

  for (let i = 1; i < arr.length - num + 1; i++) {
    tempSum = tempSum - arr[i - 1] + arr[i + num - 1];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
    console.log(tempSum, maxSum);
  }
  return maxSum;
};

console.log(maxSubArraySum([1, 2, 3, 4, 6, 7, 8, 3, 2, 6, 4, 5, 1, 100], 4));
