class Person {
  constructor(firstName, lastName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const obj = {
  a: "bob",
};
const john = new Person("John", "Doe");
console.log(john.fullName());

const addOne = (a) => a + 1;
