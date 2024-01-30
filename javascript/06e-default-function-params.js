'use strict';
// function parameters can be given a default
// default will be used if the value is undefined

function printPerson(name = 'Dave', job = 'developer') {
  console.log(name + ' work as a ' + job);
}

printPerson();
printPerson('John', 'Lawyer');

// earlier params available to later ones

function printName(first = 'john', last = 'doe', nickname = first) {
  console.log(nickname);
}
printName();
printName('jane', 'doe');
printName('jane', 'doe', 'Janie');

// Object

function printItem(item = { name: 'Tomato Soup', price: 2.99 }) {
  console.log(item);
}

printItem();
printItem({ name: 'Mocha Latte', price: 9.99 });

// expressions
// it is possible to use expressions in setting parameter defaults
function totalPrice({ qty, price }, extPrice = qty * price) {
  return extPrice;
}

console.log(totalPrice({ itemName: 'Ice Tea', qty: 2, price: 1.99 }));
