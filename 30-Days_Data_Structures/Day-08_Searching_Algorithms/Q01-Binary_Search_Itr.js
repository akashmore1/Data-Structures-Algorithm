"use strict";

// Algorithm:
/*
1. lets have start and end index of array
2. lets have a middle.
3. Repeat this: If middle of array is less than target, start = middle + 1
4. If middle of array is greater than target, end = middle -1
5. In loop again calculate middle.
6. If start becomes larger than end return -1.(Value is not present in array)
7. If middle of array is equal to target value, return middle
*/

// var search = function (nums, target) {
//   let start = 0;
//   let end = nums.length - 1;
//   let middle = Math.floor((start + end) / 2);

//   while (nums[middle] !== target) {
//     if (nums[middle] < target) {
//       start = middle + 1;
//     } else {
//       end = middle - 1;
//     }

//     middle = Math.floor((start + end) / 2);
//     if (start > end) return -1;
//   }

//   return middle;
// };
