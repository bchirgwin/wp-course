'use strict';

const fruits = ['apple', 'banana', 'pineapple', 'strawberry'];

// Array

function getFirstTwoFruits([fruit1, fruit2]) {
  console.log(fruit1, fruit2);
}
getFirstTwoFruits(fruits);

// skip param
const book = ['1', "You Don't Know JS", 'Kyle Simpson'];

function getBookTitle([, title]) {
  return title;
}
console.log(getBookTitle(book));

// REST parameter
const person = ['John', 'Doe', 'jdoe@email.com', '888-555-1234'];
function getName([first, last, ...rest]) {
  console.log('rest', rest);
  return first + ' ' + last;
}
console.log(getName(person));

// Object

const blackBeans = {
  id: 1234,
  name: 'Black Beans',
  description: 'A 16oz can of Black Beans',
  price: 2.99,
  cost: 0.59,
};

// get one or more properties from object
function getName({ name, description }) {
  return name + ' : ' + description;
}
console.log(getName(blackBeans));
console.log({ name: 'Eggs' });
