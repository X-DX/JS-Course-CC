//! for of loop
// for (const iterator of object) {
// }

// array specfic loop

//? object
const arr = [1,2,3,4,5,6]
for (const val of arr) {
//   console.log(val);
}

//? string
const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//? Maps
// The Map object holds key-value pairs and remembers the 
// original insertion order of the keys. 
// Any value (both objects and primitive values) 
// may be used as either a key or a value.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
const map = new Map()
map.set('IN', "India")
map.set('ENG', "England")
map.set('AFG', "Afganistan")
// map.set('IN', "India") //? its will not enter, only uniqe value and maintain order
console.log(map);

//! for of in map

for (const [key, value] of map) { //? [key, value] it make array destructed
    console.log(key, '-', value);
}

//! object = here we can't use for of loop, we can use 
const myobj = {
    game1 : "NFS",
    game2 : "Spiderman"
}