// falsy values

// The following evaluate to falsy, all other values are truthy
// false
// 0
// -0
// 0n (BigInt zero)
// '', "",`` (empty string)
// null
// undefined
// NaN

function truthyOrFalsy(value) {
  if (value) {
    console.log("truthy");
  } else {
    console.log("falsy");
  }
}

truthyOrFalsy(0);
truthyOrFalsy(-0);
truthyOrFalsy("");
truthyOrFalsy("");
truthyOrFalsy(``);

truthyOrFalsy("0");
truthyOrFalsy("false");
truthyOrFalsy([]);
truthyOrFalsy({});
truthyOrFalsy(function () {});
