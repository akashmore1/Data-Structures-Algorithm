"use strict";

// Recursive algorithm

/*
1. if i = length then push to result array
2. helperRecursive(i+1, nums, subset) call recursive function
3. push to subset nums[i]
4. helperRecursive(i+1, nums, subset)
5. pop() from subset
6. return result array
*/

const powerSet = (nums) => {
  const result = [];

  const helper = (nums, i, subset) => {
    if (i === nums.length) {
      result.push(subset.slice());
      return;
    }

    // don't add
    helper(nums, i + 1, subset);

    // add
    subset.push(nums[i]);
    helper(nums, i + 1, subset);

    subset.pop;
  };

  return result;
};
