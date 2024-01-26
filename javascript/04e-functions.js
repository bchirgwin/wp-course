"use strict";

// functions

// Defining

// function <name> (<params>) {
//   function body
//   return value || undefined
// }

function foo() {
  return 42;
}
console.log(foo());

// Function Expression

const bar = function () {
  console.log("Hello World!");
};
bar();

// function is full class citizen and just other types (string, number, etc...)

function baz() {
  console.log("HelloWorld");
}

function run(f) {
  // if (typeof f === 'function') {
  f();
  // }
}
run(baz);

let exec = run; // assign a function
exec(baz);

// A function can be redefined

function f() {
  console.log("I am function f");
}

function g() {
  f = function f() {
    console.log("I am function g(f)");
  };
}

f();
g();
f();

// function can be defined inside functions

function foo() {
  function baz() {
    console.log("baz");
  }
  baz();
}

foo();
// baz is not reachable outside of function foo()
// its scoped to foo()
