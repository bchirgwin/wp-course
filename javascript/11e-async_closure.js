'use strict';
// The Web is asynchronous. Each request to a web server for a page and the images, scripts
//  and css  on that page occurs asynchronously. The images could load in any order.

// These examples show some asynchronous bugs that can be encountered

// In each of the examples below try to determine the result before running

// Example 1

// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1500);
// }

// Example 2

// for (var i = 0; i < 10; i++) {
//   var k = i;
//   setTimeout(function () {
//     console.log(k);
//   }, 1500);
// }

// Example 3

// for (var i = 0; i < 10; i++) {
//   (function () {
//     var k = i;
//     setTimeout(function () {
//       console.log(k);
//     }, 500);
//   })();
// }

// Example 4

// for (var i = 0; i < 10; i++) {
//   (function () {
//     var k = i;
//     setTimeout(function () {
//       console.log(k);
//     }, Math.random() * 1500);
//   })();
// }

// use let
// let creates a new binding for every iteration of the loop

// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 500);
// }

// create a named function in which the name can give context
// The named function is our closure
// passing i as parameter

// function addTask(i) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1500);
// }

// for (var i = 0; i < 10; i++) {
//   addTask(i);
// }
