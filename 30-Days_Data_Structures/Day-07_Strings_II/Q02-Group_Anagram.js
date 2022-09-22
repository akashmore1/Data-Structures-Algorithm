"use strict";

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// 👇Below is going to be Brute-Force method, solve it later:
const checkIfAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  if (str1 === "") return true;

  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];
    if (obj1[char1]) {
      obj1[char1] += 1;
    } else {
      obj1[char1] = 1;
    }

    if (obj2[char2]) {
      obj2[char2] += 1;
    } else {
      obj2[char2] = 1;
    }
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (let key in obj1) {
    if (!obj2[key]) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

const groupAnagramsBrut = (arr) => {};

groupAnagramsBrut(["cat", "act", "tap"]);

// ========================================================================================================== //

// Best solution using sort:

const groupAnagrams = (strs) => {
  const anagramObj = {};
  const result = [];

  const sortedStrs = strs.map((e) => {
    return [...e].sort().join("");
  });

  for (let i = 0; i < sortedStrs.length; i++) {
    const str = sortedStrs[i];
    if (str in anagramObj) {
      anagramObj[str].push(strs[i]);
    } else {
      anagramObj[str] = [strs[i]];
    }
  }

  for (let key in anagramObj) {
    result.push(anagramObj[key]);
  }

  return result;
};
