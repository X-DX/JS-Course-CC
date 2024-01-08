// constructor

// declear Objects (same way to declear)
// const tinderUser = new Object()
const tinderUser = {}

// console.log(tinderUser);

tinderUser.id = "1234Abc"
tinderUser.name = "Arup"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "test@gmail.com",
    fullname: {
        userFullName: {
            fisrtName: "Arup",
            lastName: "Roy"
        }
    }
}
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

// Study here: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// const obj3 = Object.assign({}, obj1, obj2) // target {}, and other are source
const obj3 = {...obj1, ...obj2} // same this using spread
// console.log(obj3);

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
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// Destructure object
const course = {
    courseName : " JS",
    price: "1000",
    courseInstructor: "Arup"
}

// course.courseInstructor  // dont use like that
const {courseInstructor: inst} = course
// console.log(inst);

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

