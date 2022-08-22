"use strict";

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [2, 4, 9, 11, 13, 14, 20, 44];

const mergeSortedArray = (arr1, arr2) => {
  const mergedSortedArray = [];
  let i = 0;
  let j = 0;
  const totalLength = arr1.length + arr2.length;

  while (mergedSortedArray.length <= totalLength - 1) {
    if (i === arr1.length) {
      mergedSortedArray.push(arr2[j]);
      j++;
    } else if (j === arr2.length) {
      mergedSortedArray.push(arr1[i]);
      i++;
    } else {
      if (arr1[i] <= arr2[j]) {
        mergedSortedArray.push(arr1[i]);
        i++;
      } else {
        mergedSortedArray.push(arr2[j]);
        j++;
      }
    }
  }

  return mergedSortedArray;
};

console.log(mergeSortedArray(arr1, arr2));
