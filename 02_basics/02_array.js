const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

//marvel_heros.push(dc_heros) // not good way to marge
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// concat return a new array
const newHeros = marvel_heros.concat(dc_heros) 
// console.log(newHeros);

// best way to use spread operator
const all_newHeros = [...marvel_heros,...dc_heros]
// console.log(all_newHeros);

// array under array, use flat for come into single array
const another_array = [1,2,3,[4,5,6],7,[8,9,10,[11,12,13]]]
// console.log(another_array);

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// Data scraping: sometime when we get data in node,string,etc. but we need in array

console.log(Array.isArray("Arup")); // check array
console.log(Array.from("Arup")); // convert to array
console.log(Array.from({name: "Arup"})); 
// return empty array "We should define for what we need to make array.. for Key or for value"

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // return a new array from set of element