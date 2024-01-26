// Arithmetic Operators
// https://www.w3schools.com/js/js_arithmetic.asp

// +  addition
// -  subtraction
// *  multiplication
// /  division
// ** exponent
// %  modulus (remainder)
// ++ increment
// -- decrement

// Comparison Operators

// == : equal compare value only (not value type) and will use type coercion values when comparing different types<
// === : equal compare both value and type
// != : not equal compare value only and will use type coercion
// !== : not equal value or type
// > : greater than
// < : less than
// >= : greater or equal
// <= : less or equal

console.log("2 < 12", 2 < 12);
console.log('2 < "12"', 2 < "12");

console.log('2 < "John"', 2 < "John");
console.log('2 > "John"', 2 > "John");

console.log('"2" < "12"', "2" < "12");
console.log('"2" > "12"', "2" > "12");

console.log('"2" > "12"', 2 > "12");
console.log('"2" > "12"', 2 < "12");

console.log('2 == "John"', 2 == "John");
console.log('"2" == "12"', "2" == "12");
console.log('"2" == 2', "2" == 2);

console.log("2===2", 2 === 2);
console.log('"2"==="2"', "2" === "2");
console.log('"2"===2', "2" === 2);

console.log('1 == "1":', 1 == "1");
console.log("1 == [1]:", 1 == [1]);
console.log('"1" == [1]:', "1" == [1]);
console.log("0 == false:", 0 == false);

// </>Logical Operators

// &&  : and
// ||  : or
// !   : not

if (true && true) {
  console.log("both are true");
}

if (true || false) {
  console.log("either is true");
}

if (!false) {
  console.log("not false is true");
}

var x = 42;
console.log(x);
x = "Hello";
console.log(x);
x = { a: 1, b: 2 };
console.log(x);

// Ternary
// variable = (condition) ? true value: false value
let y = 0;
let x = y > 0 ? 10 : 5;
console.log(x);

// The Nullish Coalescing Operator (??)
// if left side is null or undefined returns the right side

let username = "Brian";
const text = "missing";
console.log(username ?? text);

// same as
if (username === null) {
  console.log("missing");
} else {
  console.log(username);
}

// or
if (!username) {
  console.log("missing");
} else {
  console.log(username);
}

// or
console.log(username ? username : "missing");
console.log(username ?? "missing"); // shorthand of above

// optional chaining
//  ?. returns undefined if an object is undefined or null (instead of throwing an error)

let person = {
  lastname: "doe",
  firstname: "john",
  data: {
    twitter: "@jdoe",
  },
};

person = null;

console.log(person?.data?.twitter);
// console.log(person.data.twitter);

if (person) {
  if (person.data) {
    if (person.data.twitter) {
      console.log(person.data.twitter);
    }
  }
}

// Bitwise operators
// https://www.w3schools.com/js/js_bitwise.asp

// & AND
// | OR
// ^ XOR
// ~ NOT
// << Zero fill left shift
// >> Signed right shift
// >>> Zero fill right shift
