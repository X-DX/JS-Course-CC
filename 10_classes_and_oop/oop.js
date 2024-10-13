//! object literal: it have collections, object (keys and values), methods.
const user = {
    username: "Arup",
    loginuser: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user data from DB");
        // console.log(`Username: ${this.username}`);
        //console.log(this); // current context (this) {whole object print}
    }
}

// console.log(user.username);  //access the object key and value
// console.log(user.getUserDetails()); //access the object function
// console.log(this); // {} empty (its change depends on platform, in browser this value is window)


//! constructor function
// eg: const promiseOne = new Promise() , const date = new Date()
// so, new keyword is a constructor function, its allows we can create multiple instances from one object literal only.
function User2(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}
const userOne = new User2("hitesh", 12, true) //new create empty {}, 2. constructor call due to new keyword, 3. this keyword arugument enject
const userTwo = new User2("ChaiAurCode", 11, false) 
console.log(userOne.constructor);
//console.log(userTwo);