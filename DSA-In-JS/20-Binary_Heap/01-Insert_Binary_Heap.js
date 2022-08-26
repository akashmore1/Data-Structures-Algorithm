"use strict";

// Binary heap values are stored in an array
// Binary heap array can be considered as breadth first search tree traversal

// For any child at index 'n', its parent is at index (n-1)/2

class BinaryHeap {
  constructor() {
    this.values = [];
  }

  //   We put inserted value at the end of binary tree.
  //   We compare last node to its parent value, if it is greated than perent, we swap their indexes.
  //   We repeat above process until, no parent is smaller.
  insert(val) {
    this.values.push(val);
    this.bubbleup();
  }

  bubbleup() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
}

const heap = new BinaryHeap();
heap.insert(1);
heap.insert(2);
heap.insert(4);
heap.insert(71);
heap.insert(22);
heap.insert(111);
heap.insert(21);
heap.insert(44);
heap.insert(72);
heap.insert(34);
heap.insert(83);
