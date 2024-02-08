"use strict";

// Create two functions
//  convert from Celsius to Fahrenheit °F = °C × (9/5) + 32.
//  convert from Fahrenheit to Celsius Celsius °C = (°F - 32) * 5/9.

const fToC = (temp) => ((temp - 32) * 5) / 9;
const cToF = (temp) => temp * (9 / 5) + 32;

console.log(fToC(32));
console.log(fToC(75));

console.log(cToF(0));
console.log(cToF(75));
