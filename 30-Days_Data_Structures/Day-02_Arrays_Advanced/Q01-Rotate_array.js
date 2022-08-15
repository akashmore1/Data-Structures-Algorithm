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
