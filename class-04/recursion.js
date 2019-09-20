'use strict';


let array = [1,2,3,4,5,5];


// Vinicio - Iterative Code
// O(N) time and O(1) space
// for(let i of array){
//   console.log(i);
// }

// O(n) time O(N) space
const recursion = (array, index = 0) => {
  // Base Case: Stop recursing! (i.e. calling yourself)
  if(index === array.length) {
    return null;
  } else {
    // Recursive Case: Continue recursing! (i.e. calling yourself)
    console.log(array[index]);
    recursion(array, ++index);
  }
};

recursion(array);

