"use strict";

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// ========================== Brute-force Solution =========================== //
const maxAreaBrut = (height) => {
  let area = 0;
  let tempArea;
  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < height.length; j++) {
      tempArea = (j - i) * Math.min(height[i], height[j]);
      if (tempArea > area) {
        area = tempArea;
      }
    }
  }
  return area;
};
// =========================================================================== //

// ============================= Time O(n) Solution ============================ //
// This is two pointer approach
const maxArea = (height) => {
  let maxArea = 0;
  let start = 0;
  let tempArea = 0;
  let end = height.length - 1;
  while (start < end) {
    tempArea = Math.min(height[start], height[end]) * (end - start);
    if (tempArea > maxArea) {
      maxArea = tempArea;
    }
    if (height[start] <= height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return maxArea;
};
