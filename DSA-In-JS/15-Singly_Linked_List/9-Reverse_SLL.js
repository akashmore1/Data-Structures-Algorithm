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
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  }

  reverse() {
    // swap head and tail
    // create variable called next
    // create variable called prev
    // Create variable called node, initialize it to head property
    // loop through list
    // set next to be next property on whatever node is
    // set the next property on the node to be whatever prev is
    // set prev to be the value of the node variable
    // set the node variable to be the value of the next variable
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);

//  null  1 => 2 => 3 => 4
