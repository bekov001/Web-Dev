// Chapter 5: Data Types
// Tasks from javascript.info

// Task 1: Understanding data types in JavaScript
// JavaScript has dynamic typing - variables can hold any data type

// Number type
const age = 25;
const price = 19.99;
const infinity = Infinity;
const notANumber = NaN;

console.log(typeof age); // "number"
console.log(typeof price); // "number"

// String type
const name = 'John';
const message = "Hello, World!";
const template = `Hello, ${name}!`;

console.log(typeof name); // "string"

// Boolean type
const isActive = true;
const isEmpty = false;

console.log(typeof isActive); // "boolean"

// null and undefined
const nullValue = null;
let undefinedValue;

console.log(typeof nullValue); // "object" (quirk of JavaScript)
console.log(typeof undefinedValue); // "undefined"

// Symbol type
const sym1 = Symbol('id');
const sym2 = Symbol('id');

console.log(typeof sym1); // "symbol"
console.log(sym1 === sym2); // false - symbols are unique

// BigInt type
const bigNumber = 123456789012345678901234567890n;

console.log(typeof bigNumber); // "bigint"

// Object type (complex data type)
const person = {
  name: 'John',
  age: 30,
  isActive: true,
};

console.log(typeof person); // "object"

// Array type (special kind of object)
const colors = ['red', 'green', 'blue'];

console.log(typeof colors); // "object"
console.log(Array.isArray(colors)); // true

// Function type
function greet() {
  return 'Hello!';
}

console.log(typeof greet); // "function"

// Task 2: Type conversion
// String conversion
const num = 123;
const str = String(num);
console.log(str); // "123"
console.log(typeof str); // "string"

// Number conversion
const strNum = '456';
const convertedNum = Number(strNum);
console.log(convertedNum); // 456
console.log(typeof convertedNum); // "number"

// Boolean conversion
const truthyValue = Boolean(1);
const falsyValue = Boolean(0);
const stringBool = Boolean(''); // empty string is falsy

console.log(truthyValue); // true
console.log(falsyValue); // false
console.log(stringBool); // false

// Task 3: Operators and type coercion
const result1 = '2' + 2; // String concatenation: "22"
const result2 = 2 + '2'; // Type coercion: "22"
const result3 = 2 + 2; // Arithmetic: 4

console.log(result1); // "22"
console.log(result2); // "22"
console.log(result3); // 4

// Task 4: Comparison operators
console.log(2 == '2'); // true (loose equality - type coercion)
console.log(2 === '2'); // false (strict equality - no type coercion)
console.log(null == undefined); // true
console.log(null === undefined); // false

// Task 5: Logical operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

// Task 6: Nullish coalescing operator (??)
const userInput = null;
const defaultValue = 'Guest';
const user = userInput ?? defaultValue;

console.log(user); // "Guest"

// Task 7: Optional chaining (?.)
const obj = {
  property: {
    nested: 'value',
  },
};

console.log(obj?.property?.nested); // "value"
console.log(obj?.other?.nested); // undefined (no error)
