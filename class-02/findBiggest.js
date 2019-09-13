'use strict';

// const findBiggest = (array) => {
//   // Vinicio - assuming the input is array
//   // Vinicio - THIS CODE IS ASSUMING THERE ARE NO DUPLICATED VALUES.
//   // Vinicio - always ask to your interviewer if duplicates are a concern
//
//   if(array.length < 2) {
//     // Vinicio - assuming that arrays smaller than 2 result in a null value
//     // go-to edge cases:
//     // null/undefined values, size problems: 0, 1, 2, negative values
//     return null;
//   }
//   let biggestValue = array[0];
//   // let biggestDup = {
//   //   value,
//   //   index,
//   // };
//
//   let counter = 0;
//
//   for(let i = 1; i < array.length; i++) { // O(n)
//     if(array[i] > biggestValue){
//       // Vinicio - here, I can assume that array[1] > biggestValue
//       biggestValue = array[i];
//     }
//     counter++;
//   }
//   // Vinicio - here, I can assume that biggestValue contains the biggest Value
//   let secondBiggest = null;
//
//   for(let i = 1; i < array.length; i++) { // O(n)
//     counter++;
//     if(secondBiggest === null) {
//       // Vinicio - assumption: we haven't found a value that can be thought of
//       // 'second biggest', but we don't want the biggest value
//       if(array[i] < biggestValue) {
//         secondBiggest = array[i];
//       }
//     } else {
//      if(array[i] < biggestValue && array[i] > secondBiggest) {
//        secondBiggest = array[i];
//      }
//     }
//   }
//   // O(n + n) = O(2n) = O(n)
//   // Vinicio - this counter is not jumping at a n^2 rate
//   console.log(counter);
// };

const findBiggest = (array) => {

  // Vinicio - THIS CODE IS ASSUMING THERE ARE NO DUPLICATED VALUES.
  if(array.length < 2) {
    return null;
  } // Vinicio - this creates an invariant
  // Vinicio - for your HW, this won't be as easy as what we have here
  let biggestValue = Math.max(array[0], array[1]);
  // let biggestValue = array[0] > array[1] ? array[0] : array[1];
  //
  // if(array[0] > array[1])
  //   biggestValue = array[0];
  // else
  //   biggestValue = array[1];

  let secondBiggest = Math.min(array[0], array[1]);

  for(let i = 2; i < array.length; i++) { // O(n)
    if(array[i] > biggestValue){
      secondBiggest = biggestValue;
      biggestValue = array[i];
    } else if(array[i] > secondBiggest) {
      secondBiggest = array[i];
    }
  }
  console.log(secondBiggest);
};

findBiggest([1000,5,7,6]);

// Problem solving process:
// State a goal
// Divide the problem in sub-problems (algorithm)
// HOW?
// CODE
// Make *informed* assumptions. (Invariants in CS)
// Use analogies if possible






// O(n)
const test = (array) => {
  for(let i = 0; i < array.length; i++) { //O(n)
    for(let j = 0; j < 100; j++) { //O(1)
      console.log(array[i]);
    }
  }
};



