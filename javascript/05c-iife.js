'use strict';

// iife
// immediately invoked function expression
// write a function
// enclose in parens ()
// call immediately by adding parens ()

(function sayHelloWorld() {
  console.log('Hello World!');
})();

// iife with parameters
(function (a, b) {
  console.log(a + b);
})(1, 2);

// primary use of iffe is to create private scope
const counter = (function () {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
})();
console.log(counter());
console.log(counter());
