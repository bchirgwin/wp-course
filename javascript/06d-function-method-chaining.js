'use strict';

// function chaining
// An object
// a function that returns a value to be used in another function
// functions can be chained

function Dog() {
  (this.log = function () {
    console.log(this.is);
    return this;
  }),
    (this.bark = function () {
      this.is = 'woof';
      return this;
    }),
    (this.walk = function () {
      this.is = 'walk';
      return this;
    });
}

const dog = new Dog();

dog.bark().log().walk().log();
