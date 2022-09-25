"use strict";

// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) return middle;

    if (nums[left] <= nums[middle]) {
      // sorted
      if (target >= nums[left] && target < nums[middle]) {
        // explore left part
        right = middle - 1;
      } else {
        // explore right part
        left = middle + 1;
      }
    } else {
      // sorted
      if (target > nums[middle] && target <= nums[right]) {
        // explore right part
        left = middle + 1;
      } else {
        // explore left part
        right = middle - 1;
      }
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
