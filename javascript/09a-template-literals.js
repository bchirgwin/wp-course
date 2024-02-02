// template strings
// use the back tick to define template literal
// an expression can be evaluated using ${}

// template literal
const name = 'John Doe';
const template = `Name is ${name}`;
console.log(template);

// multiline
const template2 = `Name
  ${name}
  ${name.toUpperCase()}
`;
console.log(template2);
