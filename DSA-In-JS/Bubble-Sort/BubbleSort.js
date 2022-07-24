"use strict";
// Use bubble sort to sort given array.

// 1. Start from beginning of array. Iterate towards end.
// 2. Compare two adjesant element of array. if arr[j] > arr[j+1] then swap.
// 3. Repeat this process for array.length times.

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let c = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = c;
      }
    }
  }

  return arr;
};

console.log(bubbleSort([3, 2, 1, 4]));
