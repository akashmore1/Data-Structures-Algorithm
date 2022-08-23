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

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (newNode.val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (newNode.val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  dfsPreoder() {
    const data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(current);
    return data;
  }
}

const BST = new BinarySearchTree();
BST.insert(4);
BST.insert(3);
BST.insert(7);
BST.insert(1);
BST.insert(6);
BST.insert(9);
