class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

const BST = new BinarySearchTree();

BST.root = new Node(4);
BST.root.left = new Node(3);
BST.root.right = new Node(6);
console.log(BST);
