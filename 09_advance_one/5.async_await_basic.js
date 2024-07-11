//! Async - await (make sample async programming)
//? async function always returns a promise.

//* syntax: 
// async function myFunction() {.....}

//eg:
async function hello() {
    console.log("Hello");
}
hello(); // here its return the promise

//? await pauses the execution of its surronding async function until the promise is settled. we can use under async function only.

//eg:
function api(){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Data");
            resolve(200);
        }, 2000);
    })
}

async function getWheaterData(){
    await api(); // 1st Call to api (all other execution was stop and after this 1st call done then go 2nd call)
    await api(); // 2nd call
}

getWheaterData();