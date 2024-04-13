//! Function

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName //? reference
//  sayMyName() //? call execution

//! 1. call function with arguments and return value

// function addTwoNumbers(number1, number2){ //? parameters (number1, number2)
//     console.log(number1 + number2);
// }
// addTwoNumbers() //? output: NaN (no argument that why)
// addTwoNumbers(3,2) //? output: 5
// addTwoNumbers(3,"2") //? output: 32 string
// addTwoNumbers(3,"a") //? output: 3a string

// function addTwoNumbers(number1, number2){ 
//     console.log(number1 + number2);
// }
// console.log("Result: ", result); //? output: undefined if u not use return 

//? correct way
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2  //? after return next line not execute, and store in varibale
}
const result = addTwoNumbers(3, 5) 
// console.log("Result: ", result);  


//! 2. when no value pass then outcome will undefined

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage()) //? its return undefined

//! 3. REST operator
//? when we have many value to pass then we use REST Ops (...) 
//* case 1
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 1000, 5000));  //? array output: [200, 400, 500, 1000, 5000]

//* case 2
function calculateCartPrice(val1, val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 1000, 5000)); //? output: [500, 1000, 5000]

//! 4. pass objects
const user = {
    username: 'Arup',
    price: 100
}
function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user) //? call object, sometimes we have some issue with type... eg: price become prices

//? direct make function and pass object
handleObject({
    username: "sam",
    price: 399
})

//! 5. pass array
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));