"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    this.tail.next = newNode;
    this.tail = this.tail.next;

    this.length++;
    return this;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let nodeToBeRemoved = this.head;
    let current = this.head.next;
    this.head = current;
    nodeToBeRemoved.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return nodeToBeRemoved;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = this.head;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let nodeToBeRemoved = this.get(index);
    let prevNode = this.get(index - 1);
    let nextNode = this.get(index + 1);

    prevNode.next = nextNode;
    nodeToBeRemoved.next = null;
    this.length--;

    return nodeToBeRemoved;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
