// Numbers

// Single type for number which is always
// stored as a 64-bit floating point
// There is not byte, int, signed or unsigned

// NaN - Not a Number
// calculation or string conversion causes a non number result
// Nan is not equal to anything, including NaN

var n = 0 / 0;
console.log(n, n == NaN, n === NaN);

// to check for NaN use isNaN()
console.log(isNaN(n));
