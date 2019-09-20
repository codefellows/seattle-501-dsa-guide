'use strict';

const Node = require('./Node');

class LinkedList {
  constructor() {
    // Vinicio - remember, head is the first node of the linked list
    this.head = null;
  }


  /**
   * O(1) time
   * @param value
   */
  insertAtHead(value) {
    const newHead = new Node(value); //1
    newHead.next = this.head; //2
    this.head = newHead; //3
  }

  // TODO : Homework
  // Vinicio - the more traditional way to make this work is going to involve O(n)
  // Vinicio - can you find a way to solve this in O(1) ?

  // insertAtTailConstantTime(){
  //
  // }

  // insertAtTailLinearTime(){
  //
  // }


  // TODO : Read the binary trees md file in our repo
  // TODO : Re-write this function in recursive fashion (no whiles)
  contains(value) {
    // Vinicio - this will return true if a given value is found
    // it will return false otherwise
    let current = this.head;

    while(current !== null){
      if(current.value === value) {
        return true;
      }
      current = current.next;
    }
    // Vinicio - starting here, I can assume I have visited every node in the linked list
    return false;
  }

  /**
   *  This function finds the first occurrence of a value and removes it
   * @param value - the value to be removed from the linked list
   * @returns undefined
   */
  removeFirstOccurrence(value) {
    let current = this.head;

    // Vinicio - heads in linked lists almost always give you trouble
    // (i.e. you have to write separate code to handle them)
    if(this.head) {
      if(this.head.value === value) {
        let anchor = this.head;
        this.head = this.head.next;
        anchor.next = null;
      }
    }

    while(current !== null){
      if(current.next) {
        // Vinicio - if current,next exists, then I can use
        if(current.next.value === value) {
          let anchor = current.next.next;

          // Vinicio - double check if your language has a garbage collector
          current.next.next = null;
          current.next = anchor;
        }
      }
      current = current.next;
    }

    // Vinicio - here, now we need some code to check the head of the list
    // while(current.next !== null){
    //   if(current.next.value === value) {
    //     // Vinicio - I found it!
    //   }
    //   current = current.next;
    // }
  }
}

module.exports = LinkedList;
