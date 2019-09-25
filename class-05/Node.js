'use strict';

class Node{
  constructor(value) {
    this.value = value;

    // Binary - you can have two children at most
    this.left = null;
    this.right = null;
  }
}

module.exports = Node;