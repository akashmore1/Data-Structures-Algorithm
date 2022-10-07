"use strict";

// Consider 1st element as sorted part of array
// Now add 2nd element to this sorted part of array
// i.e. if 2nd element is smaller than first then swap() else do nothing
// Repeat this process i.e. Increase size of sorted part of array by adding one by one elements

const swap = (arr, i1, i2) => {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
};

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let counter = i;
    while (counter > 0 && arr[counter] < arr[counter - 1]) {
      swap(arr, counter, counter - 1);
      counter--;
    }
  }
  return arr;
};

console.log(insertionSort([4, 3, 2, 1]));
