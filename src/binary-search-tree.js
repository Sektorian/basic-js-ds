const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  nodeRoot = null;
  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    //this.nodeRoot = null;
    return this.nodeRoot;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.nodeRoot = addInTree(this.nodeRoot, data);

    function addInTree(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addInTree(node.left, data);
      } else {
        node.right = addInTree(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchInTree(this.nodeRoot, data);

    function searchInTree(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchInTree(node.left, data);
      } else {
        return searchInTree(node.right, data);
      }
    }
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return findInTree(this.nodeRoot, data);

    function findInTree(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findInTree(node.left, data);
      } else {
        return findInTree(node.right, data);
      }
    }
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.nodeRoot = removeNode(this.nodeRoot, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }

    }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.nodeRoot) {
      return null;
    }

    let node = this.nodeRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;

  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.nodeRoot) {
      return null;
    }

    let node = this.nodeRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;

  }

}

module.exports = {
  BinarySearchTree
};