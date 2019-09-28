'use strict';

// Vinicio - let's find all the different depths in a binary tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);


four.left = one;
four.right = two;

two.left = three;
two.right = five;

const depths = [];
let dfs = 0;

const findAllDepths = (root, depthSoFar = 0) => {
  // Base case?
  if (root === null) {
    // Recursively, go back to the previous function in the call stack
    return;
  }
  dfs += 1;

  // ------------------------------------------------------------
  if (root.left === null && root.right === null) {
    // Vinicio - hey, we found a leaf =D
    depths.push(dfs); // [1,2,2]
    return;
  }
  // ------------------------------------------------------------

  if(root.left) findAllDepths(root.left, depthSoFar + 1);
  dfs -= 1;
  if(root.right) findAllDepths(root.right, depthSoFar + 1)
};


findAllDepths(four);
console.log(depths);