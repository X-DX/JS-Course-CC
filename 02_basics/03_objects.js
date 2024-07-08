//* Object Declear in:  1. constructor and in 2. tempate letter

// constructor 
// New keyword to create an object
let car = new vehicle('GT', 'BMW', '1998cc');
// Property accessors
// console.log(car.name);
// console.log(car.maker);
// console.log(car['engine']);


//* singleton = when ever we create object using constructor its called singleton

//* object literals
// how to declear object
// 1. Object.create
// 2. const JsUser = {}

//* in object there is keys and values
// here is some interesting point //? eg: name : "Arup" we declear like that but in the system name is also a string "name"
const mySym = Symbol("key1") //? we want to use mysym as symbole, so declear 1st.
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//? how to access the object and its value.
//! way 1 using dot(.), here use cant access the "full name" key.
// console.log(JsUser.email)
//! way 2 using [], but have use "" because system consider as string .
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

//! if we use symbol
// console.log(JsUser[mySym])


// change value
JsUser.email = "hitesh@chatgpt.com"

// dont want to change use freeze
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


// function 
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // string interpolation using ` `
}

console.log(JsUser.greeting()); // this return the string "Hello JS user"
// console.log(JsUser.greeting);  // this will return the function return back, its not execute its return the referance


console.log(JsUser.greetingTwo());

//* STUDY DATA TYPE 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures