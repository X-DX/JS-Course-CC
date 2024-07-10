//! Callbacks
//* A callback is a function passed as an argument to another function

// eg: with sychn programming
function sum(a, b){
    console.log(a+b);
}

function calculator(a, b, sumCallback){
    sumCallback(a, b);
}
calculator(1, 2, sum);

//eg: with asych programming
const hello = () => {
    console.log("heellooo");
}

setTimeout(hello, 2000); // hello is callback


//! callback hell
//* Nested callbacks stacked below one another forming a pyramid structure. (pyramid of DOM)
//* This style of programming becomes difficult to understand & manage.
//eg: see problem
// suppose we want to get data from seom api like show data 1(for 2s) afetr that data 2(for 2s) and data 3(for 2s) (one after one)
function getData(dataId, getNextData){ 
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

getData(1, () => {      // here the arrow function is callback. we can see now nested callback i.e callback hell
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });  
});
// very complex to understand & readbility is not good. So this is a callback hell
// so that we use Promise