'use strict';

// Closure
// count variable is available to the function that is returned from counter
// count is a private variable unaccessible outside of counter()

function counter() {
  let count = 0;

  return function () {
    return (count += 1);
  };
}

// c and c2 are functions (anonomous)
// that return count + 1
// c & c2 both have a scope of a different
// count variable

const c = counter();
const c2 = counter();

console.log('c:', c());
console.log('c2:', c2());
console.log('c:', c());
console.log('c2', c2());
console.log('c2', c2());
console.log('c2', c2());
console.log('c2', c2());
