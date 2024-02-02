'use strict';
// function.call(thisArg[, argument1[, argument2[, ...]]]);
// function.apply(thisArg[, argumentArray]);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function () {
  console.log('My name is ' + this.name);
};

Person.prototype.sayHello = function (str) {
  console.log(`${this.name} says ${str}`);
};

var p1 = new Person('Joe', 42);
var p2 = new Person('Bob', 33);

p1.sayName();

const sayName = p1.sayName;
const sayHello = p1.sayHello;
const sayName2 = p2.sayName;

// sayHello(); // this keyword is not p1, but windows
// sayName2();
sayName.call(p1);
sayName.call(p2); // call sayName with p2
sayName.call({ name: 'Jane', age: 23 }); // call with Person like object

sayName.apply(p1);

sayHello.call(p1, 'Hi');
sayHello.apply(p1, ['Hi']);

// bind
const bobSays = p1.sayName.bind(p2);
bobSays();

bobSays.call(p1); // still bound to Bob even though call with p1 (Joe)
