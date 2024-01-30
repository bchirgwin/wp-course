'use strict';

const dwarfs = ['Happy', 'Doc', 'Grumpy', 'Dopey', 'Bashful', 'Sleepy', 'Sneezy'];

const [dwarf1, dwarf2] = dwarfs;
console.log(dwarf1, dwarf2);

const [, , dwarf3] = dwarfs;
console.log(dwarf3);

// ...rest
const [d1, d2, ...rest] = dwarfs;
console.log(d1, d2, rest);

// swapping elements
let a = 42;
let b = 24;
[a, b] = [b, a];
console.log(`a = ${a} b = ${b}`);

// Array are objects
// use index has object property key to select value

// Arrays have a length property, which can be destructured along with indexes
const { 0: firstVal, length: len } = dwarfs; // get length (value) and store in key (len)
console.log(firstVal, len);

const { 3: middle1 } = dwarfs;
console.log(middle1);

// grab the first and last item of an array with object destructuring
const { length: length1, 0: first1, [length1 - 1]: last1 } = dwarfs;
console.log(first1, last1);

// a way to get middle element when length unknown
const { length, [Math.floor(length / 2)]: middle2 } = dwarfs;
console.log(middle2);

// same as
const middle3 = dwarfs[Math.floor(dwarfs.length / 2)];
console.log(middle3);
