"use strict";

// non-primitive variables

// Object
// An unordered collection of data in key, value pairs called properties
// value of a property can be primitive, non-primitive, or function

let person = {
  firstname: "John",
  lastname: "Doe",
};

console.log(person); // { firstname: 'John', lastname: 'Smith' }

// Array is is collection of values
// values can be primitives, non-primitives, or functions
// An array is typeof Object
// use Array.isArray() to determine if an objects is an array

let fruits = ["Apple", "Banana", "Pear", "Strawberry"];

console.log(fruits); // [ 'Apple', 'Banana', 'Pear', 'Strawberry' ]
console.log(typeof fruits);
console.log(Array.isArray(fruits));
console.log(Array.isArray(person));
