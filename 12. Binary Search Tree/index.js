//Binary Search Tree

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  addItems(data) {
    const node = this.root;

    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const search = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return search(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return search(node.right);
          }
        } else {
          return null;
        }
      };

      return search(node);
    }
  }

  levelOrder() {
    let tree = [];
    let temp = [];

    if (this.root) {
      temp.push(this.root);

      while (temp.length > 0) {
        let node = temp.shift();

        tree.push(node.data);

        if (node.left) {
          temp.push(node.left);
        }

        if (node.right) {
          temp.push(node.right);
        }
      }

      return tree;
    } else {
      return null;
    }
  }
}

let tree = new BST();

tree.addItems(56);
tree.addItems(17);
tree.addItems(74);
tree.addItems(14);
tree.addItems(19);
console.log(tree.levelOrder());
