// Chapter 3: Modern mode, "use strict"
// Tasks from javascript.info

'use strict';

// Task 1: Understanding use strict
// "use strict" enables strict mode where the code is executed in strict mode.
// This prevents unsafe actions and throws more errors.

// Task 2: Variable declaration in strict mode
// In strict mode, you must declare variables using let, const, or var
const name = 'John';
let age = 30;
var city = 'New York';

console.log(`${name} is ${age} years old and lives in ${city}`);

// Task 3: Function in strict mode
function greet(person) {
  'use strict';
  return `Hello, ${person}!`;
}

console.log(greet('Alice'));
