// array
// * In an array any element can be there like Number, string, boolen , etc.

// Link to stydy:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// * Important
// - JavaScript arrays are resizable and mix data type.
// - JavaScript array-copy operations create shallow copies.

// * In programming, shallow copying and deep copying are two ways to create copies of objects or data structures. The key difference lies in how they handle references to other objects within the copied data.

// * Shallow Copy:
// A shallow copy of an object is a copy whose properties share the same references

// * Deep Copy:
// A deep copy of an object is a copy whose properties do not share the same references

// * way to declear arrays
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// * Array methods

// push: add value in array from last
// myArr.push(6)
// myArr.push(7)

// pop: remove value from last
// myArr.pop()

// unshift: its add value in start of arrat i.e 0 index.
// myArr.unshift(9)

// shift: remove 0 index value from start
// myArr.shift()

//includes: its return the boolean value i.e true or false
// console.log(myArr.includes(9));

// indexOf: its check the value and return the index, and if no. not present in array the its return -1. 
// console.log(myArr.indexOf(3));

// join: its convert into string
// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// * slice, splice

console.log("A ", myArr);
// slice: Return a copy of a section of an array. in a below eg: its start 1st index and 2nd index of array. but not include the 3rd.
// eg: original arr A[0,1,2,3,4,5,6] => after slice A[1,2]
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

// splice: its remove the remove the value whatever we give the range, and return the array with remaining value.
// eg: original arr A[0,1,2,3,4,5,6] => after splice A[0,4,5,6]
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);