const score = 400
const balance = new Number(100) // object
console.log(balance); 

console.log(balance.toString().length); // string now and able to use string property
console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math); // object
console.log(Math.abs(-10));
console.log(Math.round(4.6));
console.log(Math.ceil(3.1));
console.log(Math.floor(4.9));

console.log(Math.min(4,5,3,1,9,7));
console.log(Math.max(4,5,3,1,9,7));

console.log(Math.random()); // generate random no. 0-1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);