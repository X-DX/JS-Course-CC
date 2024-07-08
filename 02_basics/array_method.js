// JavaScript array methods are built-in functions that allow efficient manipulation and traversal of arrays.
// They provide essential functionalities like adding, removing, and transforming elements, 
// as well as searching, sorting, and iterating through array elements, enhancing code readability and productivity.

// 1. JS array length
// Original Array
let courses = ["HTML", "CSS", "JavaScript", "React"];

// Accessing the Array Length
// console.log(courses.length); // 4

// 2. The toString() method converts the given value into the string
// console.log(courses.toString()); // HTML,CSS,JavaScript,React

// 3. join()
// This join() method creates and returns a new string by concatenating all elements of an array. It uses a specified separator between each element in the resulting string.
// console.log(courses.join('|')); // HTML|CSS|JavaScript|React

// 4. Array delete Operator
let emp = {
    firstName : "Raj",
    lastName : "Roy",
}
let nameEmp = delete emp.lastName;
// console.log(emp);

// 5. concat()
// The concat() method is used to concatenate two or more arrays and it gives the merged array.
// Declare three arrays
let arr1 = [11, 12, 13];
let arr2 = [14, 15, 16];
let arr3 = [17, 18, 19];

let newArr1 = arr1.concat(arr2, arr3);
// console.log(newArr1);

// 6. flat()
// The flat() method is used to flatten the array i.e. it merges all the given array and reduces all the nesting present in it.
// Creating multilevel array
const arr4 = [['1', '2'], ['3', '4', '5',['6'], '7']];

// Flat the multilevel array
const flatArr1= arr4.flat(Infinity);
// console.log(flatArr1);

// 7. push()
// The push() method is used to add an element at the end of an Array. As arrays in JavaScript are mutable objects, 
// we can easily add or remove elements from the Array. And it dynamically changes as we modify the elements from the array.
// Declaring and initializing arrays
let numArr1 = [10, 20, 30, 40, 50];

// Adding elements at the end of an array
numArr1.push(60);
numArr1.push(70, 80, 90);
// console.log(numArr1);


let strArr1 = ["piyush", "gourav", "smruti", "ritu"];
strArr1.push("sumit", "amit");

// console.log(strArr1);

// 8. unshift()
// The unshift() method is used to add elements to the front of an Array.
// Declaring and initializing arrays
let numArr2 = [20, 30, 40];
numArr2.unshift(10, 20);
// console.log(numArr2);

// 9. pop()
// remove element from end
let numArr3 = [10,20,30]
numArr3.pop();
// console.log(numArr3);

// 10. reverse()
// The reverse() method is used to reverse the order of elements in an array. It modifies the array in place and returns a reference to the same array with the reversed order.
let arrayEle = [1, 2, 3, 4, 5];
arrayEle.reverse();
// console.log(arrayEle);

// 11. map()
// The map() method creates an array by calling a specific function on each element present in the parent array. 
// It is a non-mutating method. This method iterates over an array and calls the function on every element of an array.
let arrMap = [4, 9, 16, 25];
let sub = arrMap.map(geeks);

function geeks() {
    return arrMap.map(Math.sqrt);
}
// console.log(sub);

// 12. reduce()
// The reduce() method is used to reduce the array to a single value and executes a provided function for each value of the array (from left to right) 
// and the return value of the function is stored in an accumulator.

let arrReduce = [88, 50, 25, 10];
let sub2 = arrReduce.reduce(geeks);

function geeks(total, num) {
    return total - num;
}

// console.log(sub2);
