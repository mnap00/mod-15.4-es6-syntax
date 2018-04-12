const sayHello = () => console.log('Hello World!');
sayHello();

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let greeting = 'Hello User!';
function greetWorld(isGreeting) {
    if (isGreeting) {
        let greeting = 'Hello World!';
        return greeting;
    }
    return greeting;
}
console.log(greetWorld(false)); // 'Hello User!'

const numbers = [1, 2, 3];
const numbersPlusOne = numbers.map( x => x + 1 );
console.log(numbersPlusOne);
