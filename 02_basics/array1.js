// An array in JavaScript is a data structure that allows you to store multiple values in a single variable

// ******* 1. Creating array ******

// a. using the array literal
let fruits1 = ["Apple", "Banana", "Mango"];
// console.log(fruits1);

// b. using array constructor
let fruits2 = new Array("Apple", "Banana", "Mango");
// console.log(fruits2);

// c. Empty array:
let emptyArray = [];

// ********* 2. Accessing Array Elements ******
let fruits3 = ["Apple", "Banana", "Mango"];
// console.log(fruits[0]); // Output: Apple


// ********** 3. Modifying Arrays *********

// a. Changing elements
let fruits4 = ["Apple", "Banana", "Mango"];
fruits4[1] = "Orange";
//console.log(fruits4); // Output: ["Apple", "Orange", "Mango"]

// b. Changing length
let fruits5 = ["Apple", "Banana", "Mango"];
fruits5.length = 2;
// console.log(fruits5); // Output: ["Apple", "Banana"]

// c. adding element
let courses1 = ["HTML", "CSS", "Javascript", "React"];
// Add Element to the end of Array
courses1.push("Node.js");
// Add Element to the beginning
courses1.unshift("Web Development");
// console.log(courses1);

// d. removing element
let courses2 = ["HTML", "CSS", "Javascript", "React", "Node.js"];
console.log("Original Array: " + courses2);

// Removes and returns the last element
let lastElement = courses2.pop();
// console.log("After Removed the last elements: " + courses2);

// Removes and returns the first element
let firstElement = courses2.shift();
// console.log("After Removed the First elements: " + courses2);

// Removes 2 elements starting from index 1
courses2.splice(1, 2);
// console.log("After Removed 2 elements starting from index 1: " + courses2);

