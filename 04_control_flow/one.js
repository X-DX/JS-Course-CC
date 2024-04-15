//! code should flow in condition
//* condition like: <, >, <=, >=, ==, ===, !=, !==

//! if condition

let a = 5;
let b = 10;
// Less than (<) operator
if (a < b) {
    console.log("a is less than b");
}

// Greater than (>) operator
if (b > a) {
    console.log("b is greater than a");
}

// Less than or equal to (<=) operator
if (a <= b) {
    console.log("a is less than or equal to b");
}

// Greater than or equal to (>=) operator
if (b >= a) {
    console.log("b is greater than or equal to a");
}

// Equality (==) operator
if (a == 5) {
    console.log("a is equal to 5");
}

// Strict equality (===) operator
if (a === 5) {
    console.log("a is strictly equal to 5");
}

// Inequality (!=) operator
if (a != b) {
    console.log("a is not equal to b");
}

// Strict inequality (!==) operator
if (a !== "5") {
    console.log("a is not strictly equal to '5'");
}
console.log("******************"); 
// scope
const score = 200
if(score > 100){
    const power = "fly"
    console.log(`user power ${power}`);
}
//console.log(`user power ${power}`); // here it will show error: power is local scope
console.log("******************"); 

// shorthand notation
const balance = 1000
if(balance > 5000) console.log("test");  // one line code i.e call implesite scope
console.log("******************"); 

//! nested if
let x = 10;
let y = 20;

if (x < y) {
    console.log("x is less than y");
    if (x < 15) {
        console.log("x is less than 15");
    } else {
        console.log("x is greater than or equal to 15");
    }
} else {
    console.log("x is greater than or equal to y");
}
console.log("******************"); 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

