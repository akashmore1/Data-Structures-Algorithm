/*
and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

// =============================== Brut-force ================================= //

const twoSumBrut = (nums, target) => {
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
console.log(twoSumBrut([2, 7, 11, 15], 9));

// =============================================================================== //

// ========================== nlogn time complexity ============================ //

const twoSumWithSort = (nums, target) => {
  const newArr = nums.slice(0).sort((a, b) => a - b);
  let firstNumber, secondNumber;
  let start = 0;
  let end = newArr.length - 1;

  while (start < end) {
    // const sum = newArr[start] + newArr[end];
    if (newArr[start] + newArr[end] > target) {
      end--;
    } else if (newArr[start] + newArr[end] < target) {
      start++;
    } else {
      firstNumber = newArr[start];
      secondNumber = newArr[end];
      break;
    }
  }
  const solArr = [nums.indexOf(firstNumber), nums.indexOf(secondNumber)];
  return solArr;
};
// console.log(twoSumWithSort([3, 3], 6)); // In this case this algorithm doesn't work

// =============================================================================== //

// // ============================ Optimum Solution buggy =============================== //
// // Using Hash Table
// const twoSum = (nums, target) => {
//   let numsObj = {};
//   for (let i = 0; i < nums.length; i++) {
//     numsObj[nums[i]] = i;
//   }
//   for (key in numsObj) {
//     let remaining = target - key;
//     if (numsObj.hasOwnProperty(remaining)) {
//       return [numsObj[key], numsObj[remaining]];
//     }
//   }
// };
// console.log(twoSum([3, 3], 6)); // Does not work in this case

// =============================== Best solution using Hash Table ============================= //

const twoSum = (nums, target) => {
  let hashTable = {};
  let remainingValue;

  for (let i = 0; i < nums.length; i++) {
    remainingValue = target - nums[i];
    if (hashTable.hasOwnProperty(remainingValue)) {
      return [i, hashTable[remainingValue]];
    } else {
      hashTable[nums[i]] = i;
    }
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
