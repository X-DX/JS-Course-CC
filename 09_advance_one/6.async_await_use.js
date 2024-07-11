//! use of async-await
function getData(dataId){
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            reslove("promise Success");
        }, 5000);
    })
}

// Async - await

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}

getAllData();

//? here getAllData(), we have to call it, because await have to under async function, so call getAllData() is useless.
// ? so that we have to use IIFE
//* IIFE: it is a function that is called immediately as soon as it is defined.

// ways 1
(function () {
    //..
})();

// way 2
(() => {
    //..
})();

// way 3
(async () => {
    //..
})();

// eg: 
(async function () {
    await getData(1);
    await getData(2);
    await getData(3);
})();

// not able to use again and again

// why we use ?
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE