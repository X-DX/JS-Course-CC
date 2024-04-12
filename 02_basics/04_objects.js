//! constructor

//? declear Objects (same way to declear)
// const tinderUser = new Object() //* this type declearation called singleton
const tinderUser = {} //* non singleton declearation
// console.log(tinderUser); // return empty object

// put some key and values
tinderUser.id = "1234Abc"
tinderUser.name = "Arup"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

//? object under objects put key and values
const regularUser = {
    email: "test@gmail.com",
    fullname: {
        userFullName: {
            fisrtName: "Arup",
            lastName: "Roy"
        }
    }
}
//? using . to access values
// console.log(regularUser);
// console.log(regularUser.fullname.userFullName.fisrtName);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "x",
    4: "y"
}

//! Study here: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


//? combine 2 objects
//* assign() return the object, an make a copy the values of all of the enumerable own properties from one or more source
// const obj3 = Object.assign({}, obj1, obj2) // target {}, and other are source
const obj3 = {...obj1, ...obj2} // same this using spread
// console.log(obj3);

//! we we get value from DB, array of objects
const users = [
    {
        id: 1,
        email: "test@gmail.com"
    },
    {
        name: "Arup"
    },
    {
        Course: "Course"
    }
]
users[1].email
// console.log(users);

//? its return the all keys of objects
// console.log(Object.keys(tinderUser)); // its return datatype is array

//? return the values of an object
// console.log(Object.values(tinderUser));

//? its make a array of each key and values
// console.log(Object.entries(tinderUser));

//? check is this key or value exists // or check property exit or not
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//* STUDY OBJECT METHOD 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__




//! Destructure object

// Destructuring assignment is used to unpack values from ann array, or properties from object into distinct variables.
//? eg: 
// let a = arr[0];
// let b = arr[1];

// better ways
// let arr = [0,1];
// let [a,b] = arr;

const course = {
    courseName : " JS",
    price: "1000",
    courseInstructor: "Arup"
}

//? access value of object
// course.courseInstructor  // dont use like that
const {courseInstructor: inst} = course
// console.log(inst);

// destructuring is used to extract the courseInstructor property from the course object and assign it to a variable named inst. 
// This is achieved using curly braces {} and the syntax {propertyName: variableName}. 
// Here, propertyName is the name of the property you want to extract from the object (courseInstructor), 
// and variableName is the name of the variable you want to assign the extracted value to (inst).


// API JSON
// json format without name
// {
//     "name": "Arup",
//     "courseName1": "javascript",
//     "price": "free"
// }

// array format
// [
//     {},
//     {},
//     {}
// ]

