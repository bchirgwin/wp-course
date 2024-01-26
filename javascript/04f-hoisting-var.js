// hoisting variables
// variables declared with var
// are hoisted to the top of the function
// or top of the file js file if not in a function

function hoisting() {
  x = 32; // looks like x used before being defined.
  var x; // this is hoisted to the top of the function
  console.log(x);
}
hoisting();
