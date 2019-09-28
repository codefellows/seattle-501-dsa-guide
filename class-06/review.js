'use strict';


// const traverseLinkedList = (list) => {
//   let current = list.head;
//   while(current !== null) {
//     // TASK
//     current = current.next;
//   }
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head){
    this.head = head;
  }
}


const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
// const four = new Node(4);
// const five = new Node(5);

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');


one.next = two;
two.next = three;
// three.next = four;
// four.next = five;


a.next = b;
b.next = c;
c.next = d;
d.next = e;

const listA = new LinkedList(one);
const listB = new LinkedList(a);

const mergeLinkedLists = (listA, listB) => {
  if(listA === null || listA.head === null) {
    listA = listB;
    return;
  }

  if(listB === null || listB.head === null) {
    return listA;
  }

  let currentA = listA.head;
  let currentB = listB.head;

  while(currentA !== null && currentB !== null) {
    let holderA = currentA.next;
    let holderB = currentB.next;

    currentA.next = currentB;
    if(holderA === null && holderB !== null) {
      listB = null;
      return listA;
    }
    currentB.next = holderA;

    currentA = holderA;
    currentB = holderB;
  }
  listB = null;
  return listA;
};

mergeLinkedLists(listA, listB);

let x = 0;


// Edge cases?
// One linked list is larger than the other
// One linked list is null
// both linked lists are null

// Activities
// Manipulate edges in both linked lists
// Keep track of references to nodes


// Loop
// Modify a set of 3 nodes
// Keep holders to avoid losing my values
