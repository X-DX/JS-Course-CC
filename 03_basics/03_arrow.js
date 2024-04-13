//! arrow function
//! 1. this -> current context

const user = {
    username: "hitest",
    price: 900,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);  //* tell about current context or current value then we use this
    }
}
// user.welcomeMessage
// user.welcomeMessage()
// user.username="Arup"
// user.welcomeMessage()

// console.log(this);  // empty {}, node enironment 

// In JavaScript, the behavior of this in the global context depends on where the code is executed. 
// If the code is executed in the global scope, this refers to the global object, which is window in a browser environment.

// However, when you use console.log(this) in certain environments like a browser's console, the output may appear as {} even 
//though it represents the global object (window in a browser). This is a common representation used by some console 
//environments to indicate the global object.

// function chai(){
//     let username = "hitesh"
//     // console.log(this);
//     console.log(this.username);
// }

// chai()

//? what is different diffrent between arror function and normal function

//! 2. arrow function

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
// chai()

//? explesite return, if we {} we have to write return
const addTwo = (num1, num2) => {
    return num1 + num2
}

//? implesite return (use in react) , we if use (), no need to write return

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

//? object return, we have use ()
// const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()