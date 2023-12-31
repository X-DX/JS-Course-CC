const name = "Arup"
const repoCount = 51

// console.log(name + repoCount + "value"); // dont use this

console.log(`Hello my name is ${name} and Repo Count is ${repoCount}`);

const ganeName = new String('Hitesh'); // object
console.log(ganeName[0]); // but when u say this in browser value save as key and value 
console.log(ganeName.__proto__);

console.log(ganeName.length);
console.log(ganeName.toUpperCase()); 
console.log(ganeName.charAt([2])); 
console.log(ganeName.indexOf('t')); 

const newString = ganeName.substring(0, 4);
console.log(newString);

const anotherString = ganeName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

const ssString = new String("Arup-New-Project");
console.log(ssString.split('-'));