// Numbers
let x = 3; // Numbers can be integers or floats

// Strings
let y = "Hello"; // Strings are text, wrapped in quotes

// Booleans
let z = true; // Boolean is true or false

// Null
let a = null; // Null is an empty or non-existent value

// Undefined
let b; // Undefined means a variable has been declared but not defined

// Objects
let person = {
  name: "John", // Objects store key-value pairs
  age: 30, // Values can be primitives or other objects
};

// Arrays
let colors = ["red", "green", "blue"]; // Arrays store ordered lists of values

// Functions
function sayHi() {
  // Functions are reusable blocks of code
  console.log("Hi"); // Functions can accept inputs and return outputs
}

// Dates
let now = new Date(); // Date objects represent dates and times

// Symbols
let symbol = Symbol("id"); // Symbols are unique identifiers

// Variables

// Using let
let name = "John";
name = "Jane";

// Using var
var age = 30;
age = 31;

// Using const
const pi = 3.14;

// Example with all three

let city = "New York"; // can be reassigned
var country = "USA"; // can be reassigned

const lang = "English"; // can't be reassigned

// Block scope
if (true) {
  let city = "San Francisco"; // scoped to block
  var country = "Canada"; // still available outside block
  console.log(city, country); // San Francisco Canada
}

console.log(city, country); // New York Canada
console.log(lang); // English

// Simple template literal
let first_name = "John";
let greeting = `Hello ${name}`;

// Assignment operators
let x1 = 10;

// Arithmetic operators
let sum = x + 5;
let diff = 45 - 23;
let product = 8 * 10;
let quotient = 66 / 3;

// Increment and decrement operators
x++;
x--;

// Comparison operators
let equal = 5 == 5;
let notEqual = 5 != 4;
let greater = 10 > 20;
let less = 2 < 10;

// Logical operators
let and = 5 > 0 && 3 > 1;
let or = 5 > 0 || -3 > 1;
let not = !(5 > 0);

// Ternary operator
let isAdult = age >= 18 ? true : false;

// typeof operator
let type = typeof "John"; // Returns "string"

// Precedence can be controlled with ()
let total = (2 + 3) * 5;

// Chaining assignments
let x2 = 0;
x += 5; // x = x + 5;
x -= 2; // x = x - 2;
