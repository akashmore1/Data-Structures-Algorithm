"use strict";

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1

/*
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

/*
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/

var lengthOfLongestSubstring = function (s) {
  let start = 0;
  const sObj = {};
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char in sObj) {
      start = Math.max(sObj[char] + 1, start);
    }
    maxLength = Math.max(maxLength, i - start + 1);
    sObj[char] = i;
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("aa"));
