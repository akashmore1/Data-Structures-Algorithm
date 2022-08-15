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
