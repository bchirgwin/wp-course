// Arrays

// creation

let a = [1, 2, 3];
var empty = [];

// add
a.push(42);
console.log(a);
a["10"] = 55;
a[12] = 60;
console.log(a);

// Iteration
let a = [1, 2, 3];

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

a.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

// find
let x = a.find((item) => {
  return item === 42;
});
console.log(x);

// array slice

console.log([1, 2, 3].slice(1)); // [2, 3] Elements from start
console.log([1, 2, 3].slice(1, 2)); // [2] Elements between indices
console.log([1, 2, 3].slice(-1)); // [3] Starting from the end
