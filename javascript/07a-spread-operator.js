'use strict';

// spread operator ...
// items in array become separate comma separated values

const arr = [10, 3, 7, 5, 4, 1, 2, 8];
console.log('array:', arr);
console.log('spread op:', ...arr);
console.log('math min', Math.min(...arr)); // 1  // console.log (Math.min(10, 3, 7, 5, 4, 1, 2, 8))

// object
// spread the properties of an object
// useful to include props in another object
// any property of the same name that comes later will modify values

const john = { firstName: 'John', lastName: 'Doe' };
const john2 = { ...john, middleName: 'Q', lastName: 'Public' };
console.log(john2);
