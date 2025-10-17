//Concept 1: Function returning another function
// function greetUser(greeting) {
//     return function(name) {
//         console.log(greeting + ", " + name + "!");
//     };
// }

// let sayHello = greetUser("Hello");
// sayHello("Manas"); // Output: Hello, Manas!

//Concept 2: Function returning an object with methods
// function createCounter() {
//     let count = 0;
//     return {
//         increment: function() {
//             count++;
//         },
//         decrement: function() {
//             count--;
//         },
//         getCount: function() {
//             return count;
//         }
//     };
// }

//Using this inside an object
// let student = {
//     name: "Manas",
//     age: 21,
//     displayInfo: function() {
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
// };

// student.displayInfo();  // Output: Name: Manas, Age: 21


//Concept 3: Constructor Functions
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.getSummary = function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     };
// }

// let book1 = new Book("The Alchemist", "Paulo Coelho", 1988);
// let book2 = new Book("1984", "George Orwell", 1949);

// console.log(book1.getSummary());
// console.log(book2.getSummary());

