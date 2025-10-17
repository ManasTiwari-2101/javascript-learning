// // Using object literal
// let person = {
//     name: "Manas",
//     age: 22,
//     city: "Delhi"
// };

// console.log(person);
// // Using Object constructor
// let employee = new Object();
// employee.name = "Ravi";
// employee.age = 25;
// employee.city = "Mumbai";
// console.log(employee);

// console.log(person.name);    // Dot notation → "Manas"
// console.log(person["age"]);  // Bracket notation → 22
// console.log(employee.city);  // Dot notation → "Mumbai"
// console.log(employee["name"]); // Bracket notation → "Ravi"

// Functions inside objects are called methods
// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     start: function() {
//         console.log("Car started!");
//     },
//     stop() {
//         console.log("Car stopped!");
//     }
// };

// car.start(); // Car started!
// car.stop();  // Car stopped!

// let student={name:"Manas",age:22,city:"Delhi"};
// for(let key in student){
//     console.log(key+"->"+student[key]); // Dot notataion se undefined print ho raha hai [] ye sahi rahega 
//}

// //Nested Objects 

// let student={
//     name:"Manas",
//     address:{
//         city:"Noida",
//         state:"UP"
//     },
//     age:20
//  };
// console.log(student.address.state); //UP
// console.log(student.name) //Manas
//console.log(student["age"]);


// what if i do not want my object strcture to change?

// ## 🧩 Problem

// By default, JavaScript objects are **flexible** — you can:

// * add new properties,
// * delete existing ones,
// * and even change their types.

// Example:

// ```javascript
// let student = { name: "Manas", age: 22 };
// student.city = "Delhi";   // adds new key
// delete student.age;       // deletes existing key
// student.name = 100;       // changes data type

// console.log(student); // { name: 100, city: 'Delhi' }
// ```

// You might **not want this behavior** if you want a **fixed structure** — like in a student record or configuration object.

// ---

// ## ✅ **Ways to Prevent Structural Changes**

// ### **1️⃣ Object.freeze() — Makes object fully immutable**

// ```javascript
// let student = {
//     name: "Manas",
//     age: 22,
// };

// Object.freeze(student);

// student.city = "Delhi";   // ❌ ignored
// delete student.age;       // ❌ ignored
// student.name = "Arjun";   // ❌ ignored

// console.log(student); // { name: 'Manas', age: 22 }
// ```

// * ❄️ **Freezes** both structure **and values** — you can’t add, delete, or modify properties.
// * Attempting to change it silently fails (or throws error in strict mode).

// ---

// ### **2️⃣ Object.seal() — Lock structure, allow updates**

// ```javascript
// let student = {
//     name: "Manas",
//     age: 22,
// };

// Object.seal(student);

// student.city = "Delhi";   // ❌ cannot add
// delete student.age;       // ❌ cannot delete
// student.name = "Arjun";   // ✅ can modify existing

// console.log(student); // { name: 'Arjun', age: 22 }
// ```

// * 🛡️ You **can’t add or remove** properties.
// * ✅ You **can still update existing values**.
// * Great for “fixed shape, editable values”.

// ---

// ### **3️⃣ Prevent extensions (partial lock)**

// ```javascript
// let student = { name: "Manas" };
// Object.preventExtensions(student);

// student.age = 22;   // ❌ ignored (cannot add new)
// student.name = "Arjun"; // ✅ existing key can be modified

// console.log(student); // { name: 'Arjun' }
// ```

// ---

// ## ⚖️ **Summary**

// | Method                          | Add new props | Delete props | Modify existing |
// | ------------------------------- | ------------- | ------------ | --------------- |
// | ❄️ `Object.freeze()`            | ❌             | ❌            | ❌               |
// | 🛡️ `Object.seal()`             | ❌             | ❌            | ✅               |
// | 🚫 `Object.preventExtensions()` | ❌             | ✅            | ✅               |

// ---

// ✅ **Recommendation**
// If you want to keep the **structure fixed** but still update values (like name, age, etc.):
// ➡️ Use **`Object.seal()`**.

// Personally i will prefer Object.seal() and try to use this in every program so it will become a habit.
