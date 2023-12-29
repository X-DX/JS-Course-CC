// true or false (datatype number and string)
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// but problem come when we don't compare same datatype
console.log("2" > 1); // true // auto convert "2" in no.
console.log('02' > 1); // true


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// the reason is that an equality check == and comparisons >, <, <=, >= work differently.
// comparisions convert null to a number, treating it as 0. thats why null >= 0 is true and null > 0 false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (strict check value and datatype)

console.log("2" === 2);
console.log(2 === 2);
