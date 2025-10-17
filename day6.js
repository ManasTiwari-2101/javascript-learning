//  Using square brackets
// let numbers = [1, 2, 3, 4, 5];
// let fruits = ["Apple", "Banana", "Mango"];

// // Empty array
// let emptyArray = [];
// console.log(numbers); // Output: [1, 2, 3, 4, 5]
// console.log(fruits);  // Output: ["Apple", "Banana", "Mango"]
// console.log(emptyArray); // Output: []

// How to access elements in an array using index
// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits[0]); // Output: Apple
// console.log(fruits[1]); // Output: Banana
// console.log(fruits[2]); // Output: Mango 
// console.log(fruits[3]); // Output: undefined (index out of bounds)
// console.log(fruits[-1]); // Output: undefined (negative index not supported)
// console.log(fruits.length); // Output: 3 (length of the array)
// console.log(fruits[fruits.length - 1]); // Output: Mango (last element)

// How to modify elements in an array using index
let colors = ["Red", "Green", "Blue"];

// Change element
colors[1] = "Yellow";
console.log(colors); // ["Red", "Yellow", "Blue"]

// Add element at the end
colors.push("Purple");
console.log(colors); // ["Red", "Yellow", "Blue", "Purple"]

// Remove last element
colors.pop();
console.log(colors); // ["Red", "Yellow", "Blue"]

// Add at beginning
colors.unshift("Black");
console.log(colors); // ["Black", "Red", "Yellow", "Blue"]

// Remove first element
colors.shift();
console.log(colors); // ["Red", "Yellow", "Blue"]
// Note: Arrays in JavaScript are dynamic and can hold elements of different types
// let mixedArray = [1, "Hello", true, null, undefined, {name: "John"}, [1, 2, 3]];
// console.log(mixedArray); // Output: [1, "Hello", true, null, undefined, {name: "John}, [1, 2, 3]]

// Looping through an array
let fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// Apple
// Banana
// Mango
// Using for...of loop
for (let fruit of fruits) {
    console.log(fruit);
}
// Output:  
// Apple
// Banana
// Mango
// Using forEach method
fruits.forEach(function(fruit) {
    console.log(fruit);
});
// Output:
// Apple
// Banana
// Mango
