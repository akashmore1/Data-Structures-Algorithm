"use strict";

const swap = (arr, e1, e2) => {
  [arr[e1], arr[e2]] = [arr[e2], arr[e1]];
};

const isPalindrome = (str) => {
  // We reverse the string and if reversed == original it is a palindrome.

  let start = 0;
  let end = str.length - 1;

  const strArr = [...str];

  while (start <= end) {
    swap(strArr, start, end);
    start++;
    end--;
  }

  const reversedString = strArr.join("");

  if (str === reversedString) return true;
  return false;
};

console.log(isPalindrome("nitin"));
