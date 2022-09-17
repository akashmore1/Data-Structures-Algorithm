"use strict";

// Consider 1st element as sorted part of array
// Now add 2nd element to this sorted part of array
// i.e. if 2nd element is smaller than first then swap() else do nothing
// Repeat this process i.e. Increase size of sorted part of array by adding one by one elements

const swap = (arr, index) => {
  [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
};

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;

    while (arr[j] < arr[j - 1] && j > 0) {
      swap(arr, j);
      j--;
    }
  }

  return arr;
};

console.log(insertionSort([2, 3, 1, 29, 2, 7, 44, 36]));
