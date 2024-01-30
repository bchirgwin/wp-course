// taggedTemplate

// a tagged template is a function that allows parsing
// which can then perform operations
// first param is array of strings
// remaining are related to the expressions

// What are the arguments
function tags(strings, ...expresions) {
  console.log(strings);
  console.log(expresions);
}
const name2 = 'john';
const age = 42;
tags`Hello ${name2}, I am ${age}`;

//

const name3 = 'Jane';
const age3 = 55;
function bold(strings, ...values) {
  let result = strings.map((str, i) => `${str}${values[i] ? `**${values[i]}**` : ''}`);
  return result.join('');
}

console.log(bold`My name is ${name3} and I am ${age3}`);
