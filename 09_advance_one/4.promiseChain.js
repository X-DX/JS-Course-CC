//! Promise Chain

// APIs request 1
function asyncFunc(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some Data 1");
            resolve("Promise Resolved successfully");
        },4000)
    })
}
// APIs request 2
function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some Data 2");
            resolve("Promise 2 Resolved successfully");
        },6000)
    })
}

// console.log("Fectching Data 1");
// let promise1 = asyncFunc();
// promise1.then( (res) => {
//     console.log(res);
// });

// console.log("Fectching Data 2");
// let promise2 = asyncFunc2();
// promise2.then( (res) => {
//     console.log(res);
// });

//? so, here problem is both promise1 and promise2 showing data at a some time. but we want one after one. 1st fetch promise1 after that promise2

//? we can we promise chain
// nested then()
console.log("Fectching Data 1........");
let promise1 = asyncFunc();
promise1.then( (res) => {
    console.log(res);
    console.log("Fectching Data 2.......");
    let promise2 = asyncFunc2();
    promise2.then((res) => {
        console.log(res);
    })
});



//? see example from create promise

function getData(dataId){
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            reslove("promise Success");
        }, 5000);
    })
}

// promise chain
// getData(1).then( (res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     })
// })

// better way to write promise chain
getData(1).then((res) => {
    return getData(2);
})
.then((res)=>{
    return getData(3);
})
.then((res) => {
    console.log("success");
})

//? therefor promise chain and callback hell code both are same , but in callback hell code is difficult to understand compare to promise chain.

//? but still promise chain still difficult to understand so that we have to learn async-await