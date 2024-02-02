'use strict';
// displayName method is added to the Person prototype
// instead of each object that is created.
// if the object does not have a property, the prototype is checked

const Person = function (name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.displayName = function () {
  return this.name;
};

console.log('start');
const persons = [];
persons.push(new Person('brian', 42));
// for (let i = 0; i < 5_000_000; i++) {
//   persons.push(new Person(`name ${i}`, 42));
// }

// const used = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);

// console.log(persons[0].displayName());
