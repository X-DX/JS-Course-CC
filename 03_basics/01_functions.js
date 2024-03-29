function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName -> reference
//  sayMyName() -> its call excute

// 1. call function with arguments and return value

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// 2. when no value pass then outcome will undefined

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())

// 3. REST operator
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 1000, 5000));

// 4. pass objects
const user = {
    username: 'Arup',
    price: 100
}
function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObj(user)
handleObject({
    username: "sam",
    price: 399
})

// 5. pass array

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));