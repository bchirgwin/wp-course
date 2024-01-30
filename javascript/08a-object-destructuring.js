'use strict';
// Object Destructuring

const item = {
  id: 1234,
  name: 'Crackers',
  description: 'backed salted crackers',
  cost: 0.59,
  price: 3.99,
};

// grab a subset of properties into variables from an object
const { name, price } = item;
console.log(name, price);

// rename variables from property key
const { name: itemName } = item;
console.log(itemName);

// nested object

const myAddress = {
  lastname: 'Doe',
  firstname: 'John',
  address: {
    street: '123 Main St.',
    city: 'Anycity',
    state: 'AnyState',
    Country: 'AnyCountry',
    zip: '00000',
  },
};

const {
  firstname,
  lastname,
  address: { city }, // get city which is in address
} = myAddress;

console.log(firstname, lastname, city);

// remove a prop from object
const data = { a: 1, b: 2, c: 3, d: 4 };
const removeProp = 'c';
const { [removeProp]: remove, ...rest } = data;

console.log(remove);
console.log(rest);
