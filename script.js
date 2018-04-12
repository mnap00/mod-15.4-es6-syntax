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

// task 3
//const average = (...args) => args.reduce((a, b) => a + b, 0) / args.length;
var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var sum = 0;
    args.forEach(function (arg) {
        return sum += arg;
    });
    return sum / args.length;
};
console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

// task 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

// task 5
var weirdArray = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = weirdArray[2],
    lastName = weirdArray[4];

console.log(firstName + ' ' + lastName);