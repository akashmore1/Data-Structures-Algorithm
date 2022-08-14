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
  const newSortedSquareArr = [];
  for (let i = 0; i < arr.length; i++) {
    newSortedSquareArr.push(arr[i] ** 2);
  }
  // Sort using bubble sort
  for (let j = newSortedSquareArr.length - 1; j >= 0; j--) {
    for (let i = 0; i < newSortedSquareArr.length; i++) {
      if (newSortedSquareArr[i] > newSortedSquareArr[i + 1]) {
        const temp = newSortedSquareArr[i];
        newSortedSquareArr[i] = newSortedSquareArr[i + 1];
        newSortedSquareArr[i + 1] = temp;
      }
    }
  }
  return newSortedSquareArr;
  // ====================================================================================== //
};

console.log(sortedSquareArray([-6, 1, 2, 3, 4]));
