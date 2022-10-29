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

const mergeSort = (arr) => {
  if (arr.length === 1 || arr.length === 0) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return mergeSortedArrays(left, right);
};

console.log(mergeSort([1, 3, 2, 4, 6, 8, -3, 7]));
