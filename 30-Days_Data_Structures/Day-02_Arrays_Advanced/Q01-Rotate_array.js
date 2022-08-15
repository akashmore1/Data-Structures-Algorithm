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
// ======================================================================== //

// ======================== space O(1) time (n) =========================== //
const reverse = (arr, start, end) => {
  while (start <= end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
};

const rotateArr = (nums, k) => {
  k = k % nums.length;
  nums = reverse(nums, 0, nums.length - 1);
  nums = reverse(nums, 0, k - 1);
  nums = reverse(nums, k, nums.length - 1);
  return nums;
};
