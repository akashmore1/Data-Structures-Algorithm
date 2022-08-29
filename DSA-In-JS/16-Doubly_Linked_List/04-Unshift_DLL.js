"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      this.length++;
      return this;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      return this;
    }

    let last = this.tail;
    this.tail = last.prev;
    this.tail.next = null;
    last.prev = null;
    this.length--;
    return last;
  }

  shift() {
    let oldHead = this.head;
    this.head = this.head.next;
    oldHead.next = null;
    this.head.prev = null;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return this;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode();
      this.tail = this.head;
      this.length++;
      return this;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }
}

let dll = new DoublyLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
