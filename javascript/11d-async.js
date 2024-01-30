'use strict';
// using setTimeout to simulate a task to be asynchronous

const tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

tasks.forEach((task) => {
  setTimeout(() => {
    console.log(`task ${task}...`);
  }, Math.random() * 10);
});
