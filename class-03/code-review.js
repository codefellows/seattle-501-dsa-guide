'use strict';

const findMissingValueSortedArray = (array) => {

  let low = 0;
  let high = array.length;

  while(low < high) {
    let mid = Math.floor((low + high) /2);
    console.log({mid});

    // Vinicio - add some logic to find the actual missing value

    if(array[mid] === mid + 1) {
      // Vinicio - this means, the first part of the array is fine
      // Vinicio - moving the search to the top part
      low = mid + 1;
    } else {
      // Vinicio - moving the search to the bottom part
      high = mid - 1;
    }
  }
};


findMissingValueSortedArray([1,3,4,5,6,7,8,9,10]);