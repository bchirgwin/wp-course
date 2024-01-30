'use strict';
// displayName is a method on object
// In JavaScript a function is a full class citizen like string, number, etc...
// each object has a copy of the function, just as they have their own property name

const Person = function (name, age) {
  this.name = name;
  this.age = age;

  this.displayName = function () {
    return this.name;
  };
};

console.log('start');
const persons = [];
for (let i = 0; i < 5_000_000; i++) {
  persons.push(new Person(`name ${i}`, 42));
}

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
console.log(persons[0].displayName());
