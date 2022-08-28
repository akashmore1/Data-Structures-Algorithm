"use strict";

// Priority queue element have a priority and a value
// It can be built using min binary heap
// Items with highest priority are extracted first

// First build min binary heap

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    return this.bubbleup();
  }

  bubbleup() {
    let length = this.values.length;
    let index = length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority > parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;

      index = parentIndex;
    }

    return this;
  }

  dequeue() {
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
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          rightChild.priority < element.priority &&
          rightChild.priority < leftChild.priority
        ) {
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

const heap = new PriorityQueue();
heap.enqueue("abcs", 2);
heap.enqueue("abcs", 1);
heap.enqueue("abcs", 4);
heap.enqueue("abcs", 71);
heap.enqueue("abcs", 22);
heap.enqueue("abcs", 111);
heap.enqueue("abcs", 21);
heap.enqueue("abcs", 44);
heap.enqueue("abcs", 72);
heap.enqueue("abcs", 34);
heap.enqueue("abcs", 83);
