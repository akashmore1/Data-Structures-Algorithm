"use strict";

// Priority queue element have a priority and a value
// It can be built using min binary heap
// Items with highest priority are extracted first

// First build min binary heap

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    return this.bubbleup();
  }

  bubbleup() {
    let length = this.values.length;
    let index = length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element > parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;

      index = parentIndex;
    }

    return this;
  }

  extractMin() {
    const min = this.values[0];
    if (this.values.length > 1) {
      const element = this.values.pop();
      this.values[0] = element;
    }
    this.bubbleDown();

    return min;
  }

  bubbleDown() {
    let index = 0;
    let length = this.values.length;
    let element = this.values[0];

    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (rightChild < element && rightChild < leftChild) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.values[index] = this.values[swap];
      this.values[swap] = element;

      index = swap;
    }
  }
}

const heap = new MinBinaryHeap();
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
