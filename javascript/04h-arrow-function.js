'use strict';

// function declaration
function displayName(last, first) {
  console.log(`${first} ${last}`);
}

// function expression (anonymous)
const displayName2 = function (last, first) {
  console.log(`${first} ${last}`);
};

// arrow function
// no function keyword
// => between params and body
// if one param parens are optional

const displayName3 = (last, first) => {
  console.log(`${first} ${last}`);
};

// an arrow function doesn't need a block {}
// a one line statement automatically returns the result, no return statement needed
//  => added between params and function body
const displayName4 = (last, first) => console.log(`${first} ${last}`);

// Example

const add = ([a, b]) => a + b;
const subtract = ([a, b]) => b - a;
const times = ([a, b]) => b * a;
const divide = ([a, b]) => b / a;

// map is a array function that
// iterates over each element of the array
// executes a function with each element
// returns a new array with the results
let result = [
  [1, 1],
  [2, 1],
  [3, 7],
].map(add);
console.log(result); // [2, 3, 10]

// an anonymous function can also be a parameter
result = [1, 2, 3].map((item) => item * 2);
console.log(result); // [2, 4, 6]
