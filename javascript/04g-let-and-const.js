// Let and const

// var is the older way to define functions
// let and const were added
// let and const do not have hoisting and are block scoped

let n = 42; // change to const
n = 32; // error: Assignment to constant variable if const
console.log(n);

// object and array const
let person = {
  name: "brian",
  email: "brian@email.com",
};

person.email = "new@email.com"; // allows object values can change
console.log(person);

person = { name: "john", email: "j@email.com" }; // person can't be changed to a new object
console.log(person);

// Block Scope

if (false) {
  // this is a if true block
  let x = 5; // x defined in if block
  console.log(x);
} else {
  // this is the if false block
  console.log(x); // x not defined here
}
// global scope block
console.log(x); // x is defined here
