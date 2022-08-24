"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.start = null;
    this.end = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.start) {
      this.start = newNode;
      this.end = this.start;
    } else {
      newNode.next = this.start;
      this.start = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.start) {
      return undefined;
    }

    let node = this.start;
    this.start = node.next;
    node.next = null;
    this.length--;
    return node;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
