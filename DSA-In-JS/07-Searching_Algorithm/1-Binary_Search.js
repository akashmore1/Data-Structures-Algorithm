"use strict";

const binarySearch = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== value && start <= end) {
    if (value < arr[middle]) {
      end = middle - 1;
    } else if (value > arr[middle]) {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === value) {
    return middle;
  } else {
    return -1;
  }
};

console.log(binarySearch([1, 2, 3, 4, 8, 10, 11, 12, 14, 17, 18, 20, 21], 14));
