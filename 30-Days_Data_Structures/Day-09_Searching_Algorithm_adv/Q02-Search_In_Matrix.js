"use strict";

// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// First find relevent row in which number can be present
// second apply binary search on that row

// A matrix is nothing but 2D array

// matrix = [
//  [1, 2, 3],
//  [4, 6, 7]
//  [9, 11, 14]
// ]
var searchMatrix = function (matrix, target) {
  const relevantRow = findRelevantRow(matrix, target);

  if (relevantRow === -1) {
    return false;
  }

  const arrayToSearch = matrix[relevantRow];

  let start = 0;
  let end = arrayToSearch.length - 1;
  let middle;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (arrayToSearch[middle] === target) {
      return true;
    }

    if (target < arrayToSearch[middle]) {
      end = middle - 1;
    }

    if (target > arrayToSearch[middle]) {
      start = start + 1;
    }
  }

  return false;
};

const findRelevantRow = (matrix, target) => {
  let start = 0;
  let end = matrix.length - 1;
  let middle;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (
      matrix[middle][0] <= target &&
      matrix[middle][matrix[middle].length - 1] >= target
    ) {
      return middle;
    }

    if (matrix[middle][0] > target) {
      end = middle - 1;
    }

    if (matrix[middle][matrix[middle].length - 1] < target) {
      start = middle + 1;
    }
  }

  return -1;
};
