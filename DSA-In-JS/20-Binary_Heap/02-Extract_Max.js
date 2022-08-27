"use strict";

class BinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleup();
  }

  bubbleup() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) {
        break;
      }

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  //   To find index of left children = 2*index + 1
  //   To find index of left children = 2*index + 2
  //   swap the first value with the last element
  //   pop the values property so you can return value at the end
  //   now minimum value might be the root
  //   compare with both children
  //   Find Highest child and swap
  //   Repeat this process until no child with max value
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return max;
  }

  bubbleDown() {
    let idx = 0;
    let element = this.values[0];
    const length = this.values.length;
    while (true) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (rightChild > element && rightChild > leftChild) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
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
