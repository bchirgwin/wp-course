//
// without strict mode setting
//
// a variable can be assigned a value without having to declare it
// declared in global space
// This lends to creating errors as a misspelling of a variable name
// create a new variable

x = 42;
console.log(x);

function foo() {
  xx = 22; // y is added to global space
}
foo();
console.log(y); // can access y because added as global
