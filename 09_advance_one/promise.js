// promise (it is object)
// The Promise object represents the eventual completion (or failure) of an asynchronous operation 
// and its resulting value
// im simple term: what ever task we assigne its go to queue and when task is complete its notifiy
// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// promise 3 stages: 
                    // 1. Pending : initial state, neither fulfilled nor rejected.
                    //  2. fulfilled: meaning that the operation was completed successfully.
                    //  3. rejected: meaning that the operation failed.

// create promise 
//promise is an object representing the eventual completion or failure of an asynchronous operation. it come in es6
// but before promise we use Q and BlueBird promise libraries


// way 1
const promiseOne = new Promise(function (resolve, reject) { // new promise (its take call back function)
    // Do an async task
    // DB call, cryptography, network call, etc.
    setTimeout(function(){  
        console.log("Async task is compelete");
        resolve(); // call this to connect resolve to then
    }, 1000)
});   

// consume the promise
promiseOne.then(function(){
    console.log("promise consumed"); // .then is connected to resolve
})



// way 2
new Promise(function(resolve, reject){
    setTimeout(function(){  
        console.log("Async task 2 is compelete");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})



// way 3 (data from network)
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(
            {
                username : "Arup",
                email : "test@gmail.com"
            }
        )
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})



// way 4
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve(
                {
                    sername : "Arup",
                    password : "test"
                }
            )
        }
        else{
            reject("Error : Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user)=>{
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("the Promise is either resolved or rejected");
})




// way 5
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"javascript", password: "123"})
        }else{
            reject('ERROR: JS went Wrong')
        }
    },1000)
});

// we can use .then or .catch or use .async = wait for work will show output or show error
async function consumePromiseFive(){
    try {
        const respone = await promiseFive
        console.log(respone);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

// use api in try catch format
// async function getAllUsers(){
//     try {
//         const respones = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await respones.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();

// use api use then and catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((respone) => {
    return respone.json()
})
.then((data)=>{
    // console.log(data);
})
.catch((error)=>{
    // console.log(error);
})
