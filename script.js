'use strict';

/* eslint-disable no-console */

// task 1
var a = 'Hello';
var b = 'World';

console.log(a + ' ' + b + '!');

// task 2
var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));