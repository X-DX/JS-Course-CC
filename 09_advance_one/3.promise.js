//! Promise
//* Promise is for eventual completion of task. It is an object in JS. Is is solution to callback hell.
// syntax : 
// let promise = new Promise( (resolve, reject) => {...} )    //? resolve, reject) => {...}   function with 2 handlers
// new keyword to create a promise
//? resolve and reject are callback provided by JS
// Promise state: 1. Pending, 2. Reject, 3. fulfilled (reslove)

//! how to create promise
//eg:
let promise = new Promise((resolve,reject) => {
    console.log("This is a Promise");
    resolve(); // to fulfilled we have to write resolve()
    // reject("show issed"); // if we have to show error 
})

//eg: return data from APIs
function getData(dataId, getNextData){
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            reslove("promise Success");
            if(getNextData){
                getNextData();
            }
        }, 5000);
    })
}
getData(1);

//! how to use promise
//? we have 2 method: 1. .then() 2. .catch()
//* case 1: fulfilled: use .then()
//* case 2: reject:  use .catch()

//eg: fulfilled
const getPromise = () => {
    return new Promise((reslove, reject) => {
        console.log("I am Promise");
        reslove("success");
    });  
};

let promiseVar = getPromise();
promiseVar.then( (res) => {
    console.log("Promise fullfilled", res);
});

// eg: rejected
const getPromise2 = () => {
    return new Promise((reslove, reject) => {
        console.log("I am Promise");
        reject("network Error");
    });  
};
let promiseVar2 = getPromise2();
promiseVar2.catch( (err) => {
    console.log("Rejected", err);
});

