// // Declaring a function
// function greet() {
//     console.log("Hello, welcome to JavaScript!");
// }

// // Calling the function
// greet();
// function add(a, b) {
//     let sum = a + b;
//     console.log("Sum:", sum);
// }

// add(5, 10);  // Output: Sum: 15
// add(7, 3);   // Output: Sum: 10
// function multiply(a, b) {
//     return a * b;
// }

// let result = multiply(5, 4);
// console.log("Result:", result);  // Output: Result: 20

// Arrow function this is used when we have only one variable inside paranthesis
// Normal function
function square(x) {
    return x * x;
}

// Arrow function
const squareArrow = x => x * x;

console.log(square(5));       // 25
console.log(squareArrow(5));  // 25

//If there are zero or more than one parameters, you must use parentheses:
const add = (a, b) => a + b;   // two parameters → parentheses required
const greet = () => "Hello";   // zero parameters → parentheses required
//If the function body has more than one statement, you need {} and return:
const multiply = (a, b) => {
    let result = a * b;
    return result;
};
