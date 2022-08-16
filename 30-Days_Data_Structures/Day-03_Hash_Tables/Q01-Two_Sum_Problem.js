/*
and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

// =============================== Brut-force ================================= //

const twoSum = (nums, target) => {
  let answer;
  for (let i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        answer = [i, j];
      }
    }
  }
  if (answer) {
    return answer;
  } else {
    return "No two values add upto target";
  }
};
console.log(twoSum([2, 7, 11, 15], 9));

// =============================================================================== //
