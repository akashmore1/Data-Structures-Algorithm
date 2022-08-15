"use strict";

// Given an array, rotate the array to the right by k steps, where k is non-negative.

// ======================== Brute Force =========================== //
const rotate = (nums, k) => {
  for (let i = 0; i < k; i++) {
    const temp_num = nums.pop();
    nums.unshift(temp_num);
  }
};
// ================================================================ //

// =========== Brute force without using in-built function ========== //
var rotateRaw = function (nums, k) {
  k = k % nums.length;
  if (nums.length === 1) {
    return nums;
  }
  let counter = 0;
  const tempArray = new Array(k).fill(0);

  for (let i = nums.length - k; i < nums.length; i++) {
    tempArray[counter] = nums[i];
    counter++;
  }

  for (let i = nums.length - k - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }
  for (let i = 0; i < k; i++) {
    nums[i] = tempArray[i];
  }
  return nums;
};
