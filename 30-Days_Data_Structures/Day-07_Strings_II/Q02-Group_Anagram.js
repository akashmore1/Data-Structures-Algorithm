"use strict";

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
