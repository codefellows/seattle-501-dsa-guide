'use strict';


// const isDuplicated = (array) => {
//   const tracker = new Map();
//
//   // for(let i in array) // no array[i], I can just use i
//   for(let value of array) { // O(n)
//     if (tracker.has(value)) { // O(1)
//       return true;
//     } else {
//       tracker.set(value, 1);
//     }
//   }
//   return false;
// };

const isDuplicated = (array) => {
  const tracker = new Set();

  // for(let i in array) // no array[i], I can just use i
  for(let value of array) { // O(n)
    // Vinicio - have I seen this before?
    if (tracker.has(value)) { // O(1)
      return true;
    } else {
      tracker.add(value);
    }
  }
  return false;
};


const countCharacters = (string) => { // O(n) time and O(n) space
  const tracker = new Map();

  for(let character of string) {
    if(tracker.has(character)) {

      tracker.set(character, tracker.get(character) + 1); // O(1)
    } else {
      // Vinicio - I have seen this once
      tracker.set(character,1); // not 'free' real tate
    }
  }
  console.log(tracker);
};

countCharacters('aaaaaaaaaaaaaaaaaaaaaaaa');
