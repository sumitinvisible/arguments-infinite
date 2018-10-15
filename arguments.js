/* arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

Note: “Array-like” means that arguments has a length property and properties indexed from zero, but it doesn't have Array's built-in methods like forEach and map. See §Description for details. */


function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);



/* The global Infinity property is a numeric value representing infinity.

Property attributes of Infinity
Writable	no
Enumerable	no
Configurable	no
 */


var maxNumber = Math.pow(10, 1000); // max positive number

if (maxNumber === Infinity) {
  console.log("Let's call it Infinity!");
  // expected output: "Let's call it Infinity!"
}

console.log(1 / maxNumber);
// expected output: 0



/* Infinity is a property of the global object, or in other words, a variable in global scope.

The initial value of Infinity is Number.POSITIVE_INFINITY. The value Infinity (positive infinity) is greater than any other number. Mathematically, this value behaves the same as infinity; for example, any positive number multiplied by Infinity equals Infinity, and any number divided by Infinity equals 0.

As defined by the ECMAScript 5 specification, Infinity is read-only (implemented in JavaScript 1.8.5 / Firefox 4). */


