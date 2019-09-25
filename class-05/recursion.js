'use strict';

const input = [1,10,2];

// Vinicio - this is called tail Recursion
const findBiggest = (array, currentIndex, biggestSoFar = null) => {
  // Base Case
  if(currentIndex === array.length) {
    return biggestSoFar;
  }
  // Recursive Case
  if(biggestSoFar === null) {
    biggestSoFar = array[currentIndex];
  } else {
    if (array[currentIndex] > biggestSoFar) {
      biggestSoFar = array[currentIndex];
    }
  }
  return findBiggest(array, currentIndex + 1, biggestSoFar);
};

console.log(findBiggest(input, 0));











const findBiggestHeadRecursion = (array, currentIndex) => {
  // Base Case
  if(currentIndex === array.length - 1) {
    // Vinicio - what I know is that I'm at the last element
    return array[currentIndex];
  }

  // Recursive Case
  const biggestInTheRestOfTheArray = findBiggestHeadRecursion(array, currentIndex + 1);

  if (array[currentIndex] > biggestInTheRestOfTheArray) {
    return array[currentIndex];
  } else {
    return biggestInTheRestOfTheArray;
  }
};

console.log(findBiggestHeadRecursion(input, 0));




















// TODO : Implement a function to count the number of even values in an array (Head & Tail Recursion)

const sum = (array, currentIndex, totalSum =0) => {
  //Base Case
  if (currentIndex === array.length) {
    return totalSum;
  } else {
    //Recursive Case
    totalSum = totalSum + array[currentIndex];
  }
  return sum(array, currentIndex + 1, totalSum);
};

console.log(sum(input, 0));


const sum_2 = (array, currentIndex) => {
  // Base Case
  // if(currentIndex === array.length - 1) {
  //   return array[currentIndex];
  // }
  //
  // const totalSumAmount = sum_2(array, currentIndex + 1);
  // return array[currentIndex] + totalSumAmount;

  if(currentIndex === array.length - 1) {
    return array[currentIndex]
  }

  const sumOfTheArray = sum_2(array, currentIndex + 1);
  let total = 0;
  total += sumOfTheArray + array[currentIndex];
  return total;
};

console.log(sum_2(input, 0));
