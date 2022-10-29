"use strict";

// First Write algorithm for merging to sorted arrays
// Then divide given array to smaller array until its 1 or 0 element array, then these smaller arrays are sorted arrays
// Merge these arrays to eventually merge entire array

const mergeSortedArrays = (arr1, arr2) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (result.length < arr1.length + arr2.length) {
    if (i === arr1.length) {
      result.push(arr2[j]);
      j++;
    } else if (j === arr2.length) {
      result.push(arr1[i]);
      i++;
    } else {
      if (arr1[i] > arr2[j]) {
        result.push(arr2[j]);
        j++;
      } else {
        result.push(arr1[i]);
        i++;
      }
    }
  }
  return result;
};

console.log(mergeSortedArrays([1, 3], [2, 4, 6, 8]));
