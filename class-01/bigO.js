'use strict';


const bigOofN = (array) => {
  let counter = 0;
  for(let i = 0; i < array.length; i++) {
    // Vinicio - for now, console.log will be one operation for us
    console.log(array[i]);
    counter++;
  }
  console.log(counter);
};

const nSquared = (array) => {
  let counter = 0;
  for(let i = 0; i < array.length; i++) {
    // Vinicio - for now, console.log will be one operation for us
    for(let j = 0; j < array.length; j++) {
      // Vinicio - for now, console.log will be one operation for us
      console.log(array[j]);
      counter++;
    }
  }
  console.log(counter);
};

const nCubed = (array) => {
  let counter = 0;
  for(let i = 0; i < array.length; i++) {
    // Vinicio - for now, console.log will be one operation for us
    for(let j = 0; j < array.length; j++) {
      // Vinicio - for now, console.log will be one operation for us
      for(let x = 0; x < array.length; x++) {
        // Vinicio - for now, console.log will be one operation for us
        console.log(array[x]);
        counter++;
      }
    }
  }
  console.log(counter);
};

const constantTime = (array) => {
  // Vinicio - for constant time, the size of the input is irrelevant to the
  // number of operations
  let counter = 0;
  for(let i = 0; i < 1000; i++) {
    // Vinicio - for now, console.log will be one operation for us
    console.log('hello');
    counter++;
  }
  console.log(counter);
};




// Vinicio - key points:
// Counting the amount of operations IN RELATION TO THE INPUT

bigOofN([1,2,2,4,5]);
nSquared([1,2,2,4,6]);
constantTime([1,7]);
nCubed([1,7]);

