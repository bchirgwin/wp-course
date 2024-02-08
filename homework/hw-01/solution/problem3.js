"use strict";

// Create a similar function to the last that multiplies all the numbers

function multiply([total, ...rest]) {
  rest.forEach((num) => (total *= num));
  return total;
}

console.log(multiply([1, 2, 3, 4, 5]));
console.log(multiply([-1, -2, -3, -4, -5]));
console.log(multiply([-1, 1, -2, 2, -3, 3, -4, 4, -5, 5]));
