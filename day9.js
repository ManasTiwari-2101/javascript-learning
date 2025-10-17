
// ## 🌞 **Day 9 — Arrays (Intermediate Level)**

// ### 🎯 **Topics for Today**

// 1. Creating & accessing arrays
// 2. Looping through arrays (`for`, `for...of`, `forEach`)
// 3. Adding/removing elements (`push`, `pop`, `shift`, `unshift`, `splice`)
// 4. Searching & checking (`indexOf`, `includes`)
// 5. Combining and slicing (`concat`, `slice`, `join`)

// ---

// ### 🧠 Concept 1: Creating & Accessing Arrays

// ```js
// let fruits = ["apple", "banana", "cherry"];

// console.log(fruits[0]); // apple
// console.log(fruits.length); // 3
// ```

// ✅ Arrays are **zero-indexed** — index starts from 0.

// ---

// ### 💡 Concept 2: Looping Through Arrays

// #### a) Normal for loop

// ```js
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// ```

// #### b) for...of loop (easier)

// ```js
// for (let fruit of fruits) {
//     console.log(fruit);
// }
// ```

// #### c) forEach (modern)

// ```js
// fruits.forEach(function(fruit) {
//     console.log(fruit);
// });
// ```

// ---

// ### ⚙️ Concept 3: Adding & Removing Elements

// ```js
// let numbers = [10, 20, 30];

// // Add at end
// numbers.push(40);     // [10, 20, 30, 40]

// // Remove from end
// numbers.pop();        // [10, 20, 30]

// // Add at start
// numbers.unshift(5);   // [5, 10, 20, 30]

// // Remove from start
// numbers.shift();      // [10, 20, 30]
// ```

// ---

// ### ✂️ Concept 4: Splicing & Slicing

// ```js
// let colors = ["red", "green", "blue", "yellow"];

// // Remove 1 element from index 1
// colors.splice(1, 1); // removes 'green'

// // Slice makes a new array (doesn't change original)
// let newColors = colors.slice(1, 3); // ["blue", "yellow"]
// ```

// ---

// ### 🔍 Concept 5: Searching and Joining

// ```js
// let animals = ["dog", "cat", "rabbit"];

// console.log(animals.includes("cat"));   // true
// console.log(animals.indexOf("rabbit")); // 2

// console.log(animals.join(", ")); // "dog, cat, rabbit"
// ```

// ## 🌟 **Day 9 — Advanced Arrays (Higher-Order Methods)**

// These are **powerful built-in array methods** that use **callback functions** — perfect for writing clean, concise, and modern JavaScript.

// ---

// ### 🔹 1. `map()` — transforms each element

// Used to **create a new array** by applying a function to every element.

// ```js
// let numbers = [1, 2, 3, 4, 5];

// let squares = numbers.map(num => num * num);

// console.log(squares); // [1, 4, 9, 16, 25]
// ```

// 💡 Doesn’t change the original array.

// ---

// ### 🔹 2. `filter()` — filters based on a condition

// Used to **select elements** that meet a specific condition.

// ```js
// let ages = [12, 17, 20, 25, 30];

// let adults = ages.filter(age => age >= 18);

// console.log(adults); // [20, 25, 30]
// ```

// 💡 Returns a *new* array with only elements that satisfy the condition.

// ---

// ### 🔹 3. `reduce()` — combines all elements into a single value

// Used for **summation, multiplication, or aggregation**.

// ```js
// let numbers = [10, 20, 30, 40];

// let total = numbers.reduce((sum, num) => sum + num, 0);

// console.log(total); // 100
// ```

// 🧠 First parameter → accumulator, second → current value.

// ---

// ### 🔹 4. `find()` — finds the **first** matching element

// ```js
// let students = [
//   { name: "Manas", age: 20 },
//   { name: "Ravi", age: 22 },
//   { name: "Asha", age: 19 }
// ];

// let result = students.find(s => s.age > 20);

// console.log(result); // { name: "Ravi", age: 22 }
// ```

// ---

// ### 🔹 5. `sort()` — sorts elements

// By default, it sorts as **strings**, not numbers!

// ```js
// let nums = [10, 5, 40, 25];
// nums.sort(); // [10, 25, 40, 5] ❌ wrong order (lexical sort)

// nums.sort((a, b) => a - b); // ✅ [5, 10, 25, 40]
// ```

// ---

// ### 🔹 6. `forEach()` — loops without returning a new array

// ```js
// let fruits = ["apple", "banana", "cherry"];

// fruits.forEach(fruit => console.log(fruit.toUpperCase()));
// ```

// 💡 It’s like `map()` but doesn’t return anything.

// ---
