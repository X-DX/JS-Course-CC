// 1. NAN
let score = 33;
console.log(typeof score);

let age = "12abc";
console.log(typeof age);

let valueInNumber = Number(age);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33, "33abc" => NaN, true => 1, false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true, 0 => false, "" => false, "Arup" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);

// ************* Operations **********
let value = 3;
let negValue = -value;
console.log(value);
console.log(negValue);

// basic math
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(4/2);
// console.log(2%2);

let str1 = "hello"
let str2 = "Arup"

let str3 = str1 + str2;
console.log(str3);

// complex thing now
// If STRING come first then = whole string
// If some number are there then add those number added then string
console.log("1" + 2); // string and number = string 12
console.log(1 + "2"); // number and string = string 12 
console.log("2" + 2 + 2);  // string 222
console.log(2 + 2 + "1");  // string but 41

console.log(true);
console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

// prefix and postfix to study
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion















