"use strict";

/*
In this sort, we find the smallest value then place it at first.
then again repeat this process until every element is place at right place
*/

// const swap = (arr, i1, i2) => {
//   [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
// };

// const selectionSort = (arr) => {
//   let min = Infinity;
//   let minIndex;

//   for (let j = 0; j < arr.length; j++) {
//     for (let i = j; i < arr.length; i++) {
//       if (arr[i] < min) {
//         minIndex = i;
//       }

//       if (i === arr.length - 1) {
//         swap(arr, minIndex, j);
//       }
//     }
//   }
//   return arr;
// };

// console.log(selectionSort([4, 3, 2, 1]));
