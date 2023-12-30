// 2 type of datatype
// 1. Primitive data Type
// 7 catagory (copy the value): String, Number, boolean, null, undefined, symbol, BigInt
const  score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// both value will diffirent

const bigNumber = 123456789123456789n
console.log(typeof bigNumber);


// 2. Non primitive Datatype (Reference Type)
// those who directly aacclocate memeory reference
// Array, Objects(object and browser events has to master), Functions

const heros  = ["Arup", "Ram", "Sam"]

const persons = {
    name: "Arup",
    age: 22,
}

const myFunction = function ()
{
    console.log('Hello');
    
}

console.log(typeof myFunction);

// study Here
// https://262.ecma-international.org/5.1/#sec-11.4.3