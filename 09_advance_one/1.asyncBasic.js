//! async await > promise  chains > callback hell

//! Sync in js
//? Synchronous
// Synchronous means the code run in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.
// eg:
console.log("hello");
console.log("World");
console.log("Javascript");
// order code execution, and one at a time. 



//? Asynchronous
// Due to synchronous programming, sometimes imp. instruction get blocked due to some previous instruction, which causes a delay in the UI.
// Asynchrononus code execution allows to execute next instructions immediately and donst block the flow.
// eg: (here is eg. when we need to use async programming)
console.log("Code 1...");
console.log("Code 2...");
// Some API call.. (its will do work saparatly, after fineshed output will shown) 
console.log("Code 3...");
console.log("Code 4...");

// we use setTimeout for async programming (its executed the code after some time mention by user)
// eg:
function hello(){
    console.log("This is setTimeout");
}
setTimeout(hello,1000);

// eg: //* using arrow function
setTimeout( () => {
    console.log("This is JavaScript");
},2000)

console.log("Code 5...");
console.log("Code 6...");
