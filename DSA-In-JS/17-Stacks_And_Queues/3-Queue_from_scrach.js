"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.start) {
      this.start = newNode;
      this.end = this.start;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (!this.start) {
      return undefined;
    }
    const node = this.start;
    this.start = node.next;
    node.next = null;
    this.length--;

    return node;
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
