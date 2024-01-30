'use strict';
// In JavaScript a for loop is blocking loop
// the for loop must complete before releasing
// control

function blocking() {
  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {}
}

console.log('start <ctrl>-c to exit');
blocking();
console.log('end');
