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
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
      this.length++;
    }
    return this;
  }

  traverse() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }

  //   Now work on pop method
  //   We cannot access directly the last and second last element, we will need to traverse linked list
  //   pop() returns the poped value
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
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
}

const newList = new SinglyLinkedList();
newList.push("Hello");
newList.push("World");
newList.push("!");
