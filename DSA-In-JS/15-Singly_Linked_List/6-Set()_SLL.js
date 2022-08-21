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

  // 1 => 2 => 3 => 4

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

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = this.tail;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    this.head = current.next;
    current.next = null;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return current;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    if (current) {
      current.val = value;
      return true;
    } else {
      return false;
    }
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
