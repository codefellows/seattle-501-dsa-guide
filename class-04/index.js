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


console.log(list);
list.removeFirstOccurrence(1);
console.log(list);


const list2 = new LinkedList();
list2.insertAtHead(1);
list2.insertAtHead(10);
list2.insertAtHead(100);
list2.insertAtHead(1000);
list2.insertAtHead(10000);



