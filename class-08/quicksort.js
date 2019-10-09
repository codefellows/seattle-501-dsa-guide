'use strict';

const quicksort = (items) => {
  quicksort_helper(items, 0, items.length -1);
};

const quicksort_helper = (items, leftIndex, rightIndex) => {
  if (rightIndex > leftIndex) {
    const pivotIndex = partition(items, leftIndex, rightIndex);

    // Do the same on the left
    quicksort_helper(items, leftIndex, pivotIndex - 1);
    // Do the same on the right
    quicksort_helper(items, pivotIndex + 1, rightIndex);
  }
};

const partition = (items, leftIndex, rightIndex) => {
  const pivot = rightIndex; // This line can be 'optimized'

  let firstHigh = leftIndex;
  //let firstEqual = leftIndex;

  for (let i = leftIndex; i < rightIndex; i++) {
   if( items[i] < items[pivot]) {
     swap(items, firstHigh, i);
     firstHigh++;
   }
   // If not, I only need to increase i, but that will be done
   // by default
  }
  swap(items, pivot, firstHigh);
  return firstHigh;
};

const swap = (items, indexA, indexB) => {
  const helper = items[indexA];

  items[indexA] = items[indexB];
  items[indexB] = helper;
};


const array = [4,5,4,2,2,4,6,8,7,5,4,3,3,2];
quicksort(array);

console.log(array);

