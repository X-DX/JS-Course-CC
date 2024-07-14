//! Classes
// It is a program code template for creating objects.
// those object willl have some state (varibales) & some behaviour (function) inside it.
// Classes provide a more convenient and structured way to create objects compared to traditional prototype-based inheritance.


//? syntax
// Class Definition: Use the class keyword followed by the class name.
// Constructor: The constructor method is a special method for creating and initializing an object created with a class.
// Methods: Define methods inside the class.
// Static Methods: Use the static keyword to define a method that belongs to the class, not instances.
// Inheritance: Use the extends keyword to create a subclass and super to call the parent class's constructor and methods.

// class MyClass {
//     constructor() {...}
//     myMethod() {...}
// }
// let myObj = new MyClass();

// eg: 
//Define Class

class Person {
    // Constructor method
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to get the person's name
    getName() {
        return this.name;
    }

    // Method to get the person's age
    getAge() {
        return this.age;
    }

    // Method to set the person's age
    setAge(newAge) {
        this.age = newAge;
    }

    // Static method
    static greet() {
        return "Hello!";
    }
}

// Using Class

// Creating an instance of the Person class
const person1 = new Person('Alice', 30);

// Accessing properties
console.log(person1.getName()); // Output: Alice
console.log(person1.getAge());  // Output: 30

// Setting a new age
person1.setAge(31);
console.log(person1.getAge());  // Output: 31

// Using the static method
console.log(Person.greet());    // Output: Hello!


// Inheritance
// You can also create a subclass that inherits from another class using the extends keyword:

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Call the constructor of the parent class to access the parent properties and method
        this.jobTitle = jobTitle;
    }

    // Method to get the employee's job title
    getJobTitle() {
        return this.jobTitle;
    }

    // Overriding a method from the parent class
    getAge() {
        return `Age of ${this.name} is ${this.age}`;
    }
}

// Creating an instance of the Employee class
const employee1 = new Employee('Bob', 40, 'Developer');

// Accessing properties and methods
console.log(employee1.getName());      // Output: Bob
console.log(employee1.getAge());       // Output: Age of Bob is 40
console.log(employee1.getJobTitle());  // Output: Developer
