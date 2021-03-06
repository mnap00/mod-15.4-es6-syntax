/* eslint-disable no-console */

// task 1
const a = 'Hello';
const b = 'World';

console.log(`${a} ${b}!`);


// task 2
const multiply = (a = 1, b = 1) => a * b;
console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));


// task 3
//const average = (...args) => args.reduce((a, b) => a + b, 0) / args.length;
const average = (...args) => {
    let sum = 0;
    args.forEach(arg => sum += arg);
    return sum / args.length;
};
console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));


// task 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));


// task 5
const weirdArray = [1, 4, 'Iwona', false, 'Nowak'];
const [,,firstName,,lastName] = weirdArray;
console.log(`${firstName} ${lastName}`);
