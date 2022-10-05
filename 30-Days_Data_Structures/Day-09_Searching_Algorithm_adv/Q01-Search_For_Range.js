"use strict";

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

var searchRange = function (nums, target) {
  const leftIndex = findLeftIndex(nums, target);
  const rightIndex = findRightIndex(nums, target);
  return [leftIndex, rightIndex];
};

const findLeftIndex = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      if (middle === 0) return 0;

      if (nums[middle - 1] === target) {
        right = middle - 1;
      } else {
        return middle;
      }
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};

const findRightIndex = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      if (middle === nums.length - 1) return nums.length - 1;
      if (nums[middle + 1] === target) {
        left = middle + 1;
      } else {
        return middle;
      }
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};
