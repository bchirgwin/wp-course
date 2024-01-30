'use strict';

// this refers to an object, which object depends on how called
// In an object this refers to the object
// this refers to the global object outside of object or function ()
// function this refers to global object
// function in strict mode, this is undefined
// event this refers to the element that received the event
// use call, apply, bind to explicitly refer to any object
// arrow functions this refers to the outer function

function Person(name, email) {
  this.name = name;
  this.email = email;

  function displayName() {
    console.log(this.name);
  }
}

function displayNames() {
  console.log(john);
  console.log(jane);
}

let john = new Person('Brian', 'b@email.com');
let jane = new Person('Jane', 'j@email.com');

displayNames();
