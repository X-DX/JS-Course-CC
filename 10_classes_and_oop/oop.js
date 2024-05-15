// object literal: have collections, object (keys and values), methods.
const user = {
    username: "Arup",
    loginuser: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user data from DB");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // {}


// connstructor function
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this;
}
const userOne = new User("hitesh", 12, true) //new create empty {}, 2. constructor call due to new keyword, 3. this keyword arugument enject
const userTwo = new User("ChaiAurCode", 11, false) 
console.log(userOne.constructor);
//console.log(userTwo);