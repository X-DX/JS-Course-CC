//! 1. You are creating a website for college, creating a class User with 2 properties,
//! name & email. it also has a method called viewData() that allows user to view website data.

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(`User Data: Name:${this.name}, Email:${this.email}`);
    }
}
const user1 = new User("Arup","arup@gmail.com");
// user1.viewData();

class Admin extends User {
    constructor(name, email)
    {
        super(name, email); 
    }
    editData(){
        console.log(`New Data: Name:${this.name}, Email:${this.email}`);
    }
}

let admin1 = new Admin("admin","admin@gmail.com");
admin1.editData();

