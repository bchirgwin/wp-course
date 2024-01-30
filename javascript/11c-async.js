"use strict";
// using setTimeout to simulate a task to be asynchronous

console.log("task 1...");
setTimeout(() => {
  console.log("task 2...");
}, 0);
console.log("task 3...");
