//! {} this we call scope, when we used with function
// let a=10;
// const  b= 20
// var c = 300

// console.log(a);
// console.log(b);
// console.log(c);

//!  1. scope {}, globe scope and block scope
//* CASE 1
if (true) {
    let a = 10
    const b = 20
    var c = 30 
}
// console.log(a); //? it will show error
// console.log(b); //? it will show error
// console.log(c); //? output: 30 why ? //

//* CASE 2
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);  // print 10 not 300 
}

//! 2. Nested Scope

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // block scope error
     two() 
}
// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // same error block scope
}

// console.log(username); // same error block scope

//! ++++++++++++++++++ interesting ++++++++++++++++++
//* hosting concept

console.log(addone(5)) // its show output : 6, because here we normally declear a function

function addone(num){
    return num + 1
}

//* addTwo(5) // show error , beacause here we store function value in varibale

const addTwo = function(num){ // here function store in varibale i.e we called experssion
    return num + 2
}