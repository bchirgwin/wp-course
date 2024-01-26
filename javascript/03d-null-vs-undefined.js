// null & undefined
//
// undefined is a variable declared but never assigned a value
// null is a value

if (null == undefined) {
  console.log("null and undefined are equal");
}

var x = null;
var y = null;
var z;

if (x == null) {
  console.log("x == null");
}
if (x == x) {
  console.log("x == x");
}
if (x == y) {
  console.log("x == y");
}

if (x === null) {
  console.log("x == null");
}
if (x === x) {
  console.log("x == x");
}
if (x === y) {
  console.log("x == y");
}

console.log("z = " + z);

if (z == x) {
  console.log("z == x");
}

if (z === x) {
  console.log("z === x");
}

// Check for null OR undefined

// Will be true null and undefined
// but also "falsy" values like "", 0, false

let value = 0;

if (!value) {
  console.log("!value");
}

// Will only be false if value is null OR undefined
if (value != null) {
  console.log("!= null");
}

// More explicit version of above
if (value !== undefined && value !== null) {
  console.log("!== undefined && !== null");
}

if (!value) {
  // & value != 0) {// should check for 0
  console.log("bonus 1000");
} else {
  console.log(value);
}
