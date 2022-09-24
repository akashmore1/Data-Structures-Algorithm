"use strict";

const binarySearchRecur = (arr, target) => {
  const helper = (arr, target, left, right) => {
    if (left > right) return -1;
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) return middle;

    if (arr[middle] > target) return helper(arr, target, left, middle - 1);
    if (arr[middle] < target) return helper(arr, target, middle + 1, right);
  };

  return helper(arr, target, 0, arr.length - 1);
};

console.log(binarySearchRecur([1, 2, 3, 4, 6, 8, 10], 7));
