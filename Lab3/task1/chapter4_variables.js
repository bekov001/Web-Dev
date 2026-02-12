// Chapter 4: Variables
// Tasks from javascript.info

// Task 1: Understanding variables
// Variables are containers for storing data values

// Task 2: Variable naming styles
// camelCase is recommended in JavaScript
const myVariable = 'Hello';
const userName = 'John';
const isActive = true;

// Task 3: const, let, and var differences
const PI = 3.14159; // Constants - cannot be reassigned
let counter = 0; // Block-scoped, can be reassigned
var oldStyle = 'avoid'; // Function-scoped, avoid using

// Task 4: Declare multiple variables
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// Task 5: Working with variables
let x = 5;
let y = 3;
let z = x + y;
console.log(`${x} + ${y} = ${z}`);

// Task 6: Variable reuse
let name = 'Alice';
console.log(name);
name = 'Bob';
console.log(name);
