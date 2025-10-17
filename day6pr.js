// let arr=["manas","rahul","sachin","dhoni"];
// console.log(arr);
// let arr=[1,2,3,4,5,4,858,4,6,66,67];
// let max=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log(max);
// let arr=[1,2,3,4,5,6,7,8,9];
// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);
// }
//  let arr=["manas","rahul","sachin","dhoni"];
//  arr.push("virat");
//  arr.unshift("rohit");
// console.log(arr);

// 2 D array 
// Creating a 2D array (3x3)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Nested loops to print all elements
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
// }

for(let i=0;i<matrix.length;i++){
    console.log(matrix[i].join(" ") );
}

///to display in a single line
for (let i = 1; i <= 10; i++) {
    process.stdout.write(i + " "); // prints numbers in same line
}
