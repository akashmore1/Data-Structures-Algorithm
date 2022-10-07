"use strict";

const swap = (arr, i1, i2) => {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
};

const bubbleSort = (arr) => {
  let isSwapping = false;
  for (let j = arr.length; j > 0; j--) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        isSwapping = true;
      }
    }
    if (!isSwapping) {
      break;
    }
  }
  return arr;
};

console.log(bubbleSort([4, 1, 2, 3, 6, 7, 8]));
