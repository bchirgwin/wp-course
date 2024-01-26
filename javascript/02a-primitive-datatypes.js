"use strict";

// Variables
// a variable is a container for a value
// variables do not have a type, values have type

// undefined
// null (although typeof returns object)
// boolean
// number
// String
// BigInt
// Symbol

// Undefined
var x; //  x is declared but value is undefined
console.log(x, typeof x);

// null
var y = null; // y is declared and set to null
console.log(y, typeof y); // null is defined as type object

// Boolean
var t = true;
var f = false;
console.log(t, typeof t);
console.log(f, typeof f);

// Number
var n = 42;
console.log(n, typeof n);

// String
var s = "Hello World!";
console.log(s, typeof s);

// BigInt999403202340202223333333333333333n
var bn = ; // BigInt(999403202340202223333333333333333)
console.log(bn, typeof bn);

// Symbol (added in ES6/2015)
var m = Symbol("MySymbol");
console.log(m, typeof m);
