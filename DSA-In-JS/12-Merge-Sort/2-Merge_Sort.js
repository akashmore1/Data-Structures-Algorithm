"use strict";

// algorithm:
// Break up the array into halves until you have arrays that are empty or have 1 element
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at full length of array
// once the array has been merged back together, return merged (and sorted) array.

// first write a function which merge two sorted arrays
const merge = (arr1, arr2) => {
  const totalLength = arr1?.length + arr2?.length;
  const mergedArray = [];
  let i = 0;
  let j = 0;

  while (mergedArray.length <= totalLength - 1) {
    if (i === arr1.length) {
      mergedArray.push(arr2[j]);
      j++;
    } else if (j === arr2.length) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  }

  return mergedArray;
};

const mergeSort = (arr) => {
  if (arr.length === 1 || arr.length === 0) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

mergeSort([1, 2, 66, 455, 3, 7, 55, 44, 23, 42, 88, 5, 33, 9, 452, 32546, 753]);
