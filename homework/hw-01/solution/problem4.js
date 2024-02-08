"use strict";

// Create a function that filters out negative numbers from an array. It takes an array and returns a new array.

function filterNeg(nums) {
  return nums.filter((num) => num >= 0);
}

const a = [0, -1, -2, 3, 4, 5, -10];

console.log(filterNeg(a));
console.log(a);
