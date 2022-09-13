"use strict";

// For array of n length, total n! permutations can be formed.

// algo
// Swap -> recursion -> swap

const allPermutations = (nums) => {
  const permutations = [];

  const helper = (nums, i) => {
    if (i === nums.length - 1) {
      permutations.push(nums.slice());
      return;
    }

    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];

      helper(nums, i + 1);

      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  helper(nums, 0);

  return permutations;
};
