// 'use strict';

function Person(name, email) {
  this.name = name;
  this.email = email;

  this.displayName = function () {
    console.log(this.name);
  };
}

function displayNames() {
  john.displayName(); // this refers to the object that called the function john
  jane.displayName(); // this refers to the object that called the function jane
}

// Use the new keyword to create a new object
let john = new Person('John', 'john@email.com');
let jane = new Person('Jane', 'jane@email.com');

displayNames();
