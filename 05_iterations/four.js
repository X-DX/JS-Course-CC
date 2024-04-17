//! for in loop  

//? object 
const myobj = {
    js:"javascript",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myobj) {
    // console.log(myobj[key]);
    // console.log(`${key} shortcut is for ${myobj[key]}`);
}

//? array
const programming = ["js", "rb", "switch"]
for (const key in programming) {
    // console.log(programming[key]);
}

//? map
// const map = new Map()
// map.set('IN', "India")
// map.set('ENG', "England")
// map.set('AFG', "Afganistan")

// for (const key in map) {
//     console.log(key); // not work
// }
