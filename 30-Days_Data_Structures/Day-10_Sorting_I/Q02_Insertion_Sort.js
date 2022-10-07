"use strict";

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
