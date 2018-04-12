'use strict';

var sayHello = function sayHello() {
    return console.log('Hello World!');
};
sayHello();

for (var i = 0; i < 5; i++) {
    console.log(i);
}

var greeting = 'Hello User!';
function greetWorld(isGreeting) {
    if (isGreeting) {
        var _greeting = 'Hello World!';
        return _greeting;
    }
    return greeting;
}
console.log(greetWorld(false)); // 'Hello User!'

var numbers = [1, 2, 3];
var numbersPlusOne = numbers.map(function (x) {
    return x + 1;
});
console.log(numbersPlusOne);