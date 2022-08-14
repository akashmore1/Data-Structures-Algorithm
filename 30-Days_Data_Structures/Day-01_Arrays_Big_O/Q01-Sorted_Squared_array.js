"use strict";

/*  
You are given an array of integers in which each subsequent value is not less than pervious value.
Write a function that takes this array as an input and returns 
a new array with squares of each number sorted in ascending order
*/

const sortedSquareArray = (arr) => {
  // Return empty array in case of empty input array
  if (arr.length === 0) {
    return [];
  }

  // ================================= Brute-force method ================================ //
  const newSortedSquareArrBrut = [];
  for (let i = 0; i < arr.length; i++) {
    newSortedSquareArrBrut.push(arr[i] ** 2);
  }
  // Sort using bubble sort
  for (let j = newSortedSquareArrBrut.length - 1; j >= 0; j--) {
    for (let i = 0; i < newSortedSquareArrBrut.length; i++) {
      if (newSortedSquareArrBrut[i] > newSortedSquareArrBrut[i + 1]) {
        const temp = newSortedSquareArrBrut[i];
        newSortedSquareArrBrut[i] = newSortedSquareArrBrut[i + 1];
        newSortedSquareArrBrut[i + 1] = temp;
      }
    }
  }
  return newSortedSquareArrBrut;
  // ====================================================================================== //

  // ======================== Two Pointer {time: (O)n, space: (O)n} ======================= //
  const newSortedSquareArr = [];
  const reverseArr = [];
  let counter = 0;
  let start = 0;
  let end = arr.length - 1;
  const length = arr.length;

  const positiveNum = (num) => {
    return num < 0 ? num * -1 : num;
  };

  while (start <= end) {
    let startNum = positiveNum(arr[start]);
    let endNum = positiveNum(arr[end]);
    if (startNum >= endNum) {
      newSortedSquareArr.push(startNum ** 2);
      start++;
    } else {
      newSortedSquareArr.push(endNum ** 2);
      end--;
    }
  }

  while (counter < length) {
    reverseArr.push(newSortedSquareArr.pop());
    counter++;
  }

  return reverseArr;
  // ====================================================================================== //
};

console.log(sortedSquareArray([-6, 1, 2, 3, 4]));
// [-4, -2, 1, 3]
