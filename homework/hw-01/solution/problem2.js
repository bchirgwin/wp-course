"use strict";

// Create a function that takes an array of numbers and returns the sum of the numbers.

function add([total, ...rest]) {
  rest.forEach((num) => (total += num));
  return total;
}

console.log(add([1, 2, 3, 4, 5]));
console.log(add([-1, -2, -3, -4, -5]));
console.log(add([-1, 1, -2, 2, -3, 3, -4, 4, -5, 5]));
