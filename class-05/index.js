'use strict';

const Node = require('./Node');

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);


four.left = one;
four.right = two;

two.left = three;
two.right = five;


const traverseAndPrintValues = (root) => {
  // Base Case
  if (root === null) {
    return;
  }
  console.log(root.value);
  traverseAndPrintValues(root.left);
  traverseAndPrintValues(root.right);
};


let count = 0;
// TODO : Create a function to count leaves
// TODO : Create a function to create an array with all the leaves


// TODO : (Stretch goal) Write a function to check if a value is present in a Binary Tree (no global values)

const countNodes = (root) => {
  // Base Case
  if (root === null) {
    return;
  }
  // THis happens in every single node
  count += 1;

  countNodes(root.left);
  countNodes(root.right);
};

// const countNodes = (root) => {
//   // Base Case
//   if (root === null) {
//     return;
//   }
//   <WORK>
//   countNodes(root.left);
//   countNodes(root.right);
// };


countNodes(four);
console.log(count);


