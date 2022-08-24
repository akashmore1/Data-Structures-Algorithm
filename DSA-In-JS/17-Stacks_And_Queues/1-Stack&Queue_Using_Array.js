"use strict";

// stack   : LIFO

const arrStack = [];

arrStack.push(1);
arrStack.pop();

// Queue   : FIFO

const arrQueue = [];
arrQueue.push("1");
arrQueue.shift();

// Implementing stack using array is fine as it has O(1) time complexity
// But implementing queue with array can be time consuming as one of the operations will have O(n) time complexity.
