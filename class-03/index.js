'use strict';

const Node = require('./Node.js');
const LinkedList = require('./LinkedList');

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n100 = new Node(100);

const list = new LinkedList();
list.head = n1;

// console.log(n1); // Vinicio - this is the entire node
// console.log(n1.value); // Vinicio - this is just the value

n1.next = n2;
n2.next = n3;
n3.next = n100;


// Vinicio - let's loop over the elements STARTING at the head

let current = list.head;

while(current !== null) {
  console.log(current.value);
  current = current.next;
}












const removeEvenValues = (list) => {
  // Vinicio - to be able to find the values you need to delete
  // .next needs to be on the right side of an assignment (if the line is an
  // assignment)

  // Vinicio - to be able to move the arrows to the next value in the list
  // the .next needs to be on the left side of an assignment (if the line is an
  // assignment)
};



















