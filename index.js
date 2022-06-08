// Add answers here

// # Test - Programming Basics

// ## Test Instructions
// * Work from the `index.js` file provided in this repository.
// * Work in the `master` branch. Commit your changes to the `index.js` file and push them to your repository. Your answers will be automatically graded when you push to your repository. If you do not push an updated `index.js` file to the `master` branch, the automatic grading will fail.
// * Follow the instructions below to complete the test. **Important**: Make sure that the *names* of your variables/functions match the names in the instructions below.
// * All your functions should return a value.
// * Good luck!

// ### Conditional Algorithms

// #### 1. Los or New?
// Create a function named "_nameOfCity_". If a passed string begins with "_Los_" or "_New_", then return the full string. If not, return "_The city name does not begin with Los or New_". The function should be **case insensitive**.

// ##### Examples

// nameOfCity('New York') ➞ 'New York'
// nameOfCity('newark') ➞ 'newark'
// nameOfCity('London') ➞ 'The city name does not begin with Los or New'
console.log('------QUESTION 1------');

function nameOfCity(str) {
  if (
    str.length >= 3 &&
    (str.substring(0, 3) == "Los" || str.substring(0, 3) == "New")
  ) {
    return str;
  }

  return "The city name does not begin with Los or New";
}


console.log(nameOfCity("New York")); // New York
console.log(nameOfCity("newark")); //
console.log(nameOfCity("London")); // "_The city name does not begin with Los or New_"

console.log('------QUESTION 2------');

// #### 2. isDivisible?
// Create a function named "// powerOf(3) ➞ 27
// powerOf(4) ➞ 256_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false.
function isDivisible(number) {
  return number % 100 === 0 ? number % 1 === 0 : number % 100 === 0;
}

console.log(isDivisible(1)); // false
console.log(isDivisible(1000)); // true
console.log(isDivisible(100)); // true

// ##### Examples

// isDivisible(1) ➞ false
// isDivisible(1000) ➞ true
// isDivisible(100) ➞ true

console.log('------QUESTION 3 NOT THERE (MISSING)------');


console.log('------QUESTION 4------');
// #### 4. What's the weathe// powerOf(3) ➞ 27
// powerOf(4) ➞ 256* to complete this task. Create a function named "_isRaining_". If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_".
let isRaining = (rain) =>
  rain === true || rain !== false
    ? console.log("wet day - you need an umbrella")
    : console.log("dry day - leave your umbrella at home");
isRaining(true); // wet day - you need an umbrella

// ##### Example

// isRaining(true) ➞ 'wet day - you need an umbrella'

console.log('------QUESTION 1 LOOP------');
// ### Loops

// #### 1. Sequence
// Create a function named "_geometricalSequence_" and **use a loop** to return the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.

const number = [1, 2, 4, 8, 16, 32, 64, 128];
function geometricalSequence() {
  for (let i = 0; i < number.length; i++) {
    console.log(`${number[i] * 2}`);
  }
}
geometricalSequence();

// ##### Example

// geometricalSequence() ➞ '1 2 4 8 16 32 64 128 256'
console.log('------QUESTION 2 LOOP------');

// #### 2. Multiples
// Create a function named "_multiplesOfThree_" and **use a loop** to return the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.

// ##### Example

// multiplesOfThree() ➞ '3 6 9 12 15'
let value = [1, 2, 3, 4, 5];
function multiplesOfThree() {
  for (let i = 0; i < value.length; i++) {
    console.log(`${value[i] ** 3}`);
  }
  return value;
}
multiplesOfThree();

// ### Math
console.log('------QUESTION 1 MATH------');
// #### 1. You've got the power
// Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should **use a Math object method** to make the calculation.

// ##### Examples

// powerOf(3) ➞ 27
// powerOf(4) ➞ 256

const powerOf = function (x) {
  console.log(x ** x);
};
powerOf(3); // 27
powerOf(4); // 256

console.log('------QUESTION 1 PROBLEM SOLVING------');
// ### Problem Solving

// #### 1. How many?
// Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels (A, a, E, e, I, i, O, o, U, u) the string contains, if any. **Return the vowel count** of the string.

// ##### Examples

// vowelCount("hello") ➞ 2
// vowelCount("test") ➞ 1
// vowelCount("fbw") ➞ 0
let vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
function vowelCount(str) {
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  console.log(count);
}

vowelCount("hello");
vowelCount("test");
vowelCount("fbw");
// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
