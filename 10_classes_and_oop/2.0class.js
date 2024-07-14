// why we need classes and what problems they solve
// Why We Need Classes : 
// Organization and Structure, Reusability, Encapsulation, Inheritance

// Problems Solved by Classes
// Managing Complexity, Avoiding Redundancy, Improving Maintainability, Promoting Consistency

// Example: Without Class Using Object
// Creating an object using an object literal
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Accessing object properties and methods
console.log(person.name); // Output: John
person.greet(); // Output: Hello, my name is John

// Creating an object using a factory function
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
}

const person11 = createPerson("Alice", 25);
const person22 = createPerson("Bob", 35);

// Accessing object properties and methods
console.log(person11.name); // Output: Alice
person11.greet(); // Output: Hello, my name is Alice

console.log(person22.age); // Output: 35
person22.greet(); // Output: Hello, my name is Bob


// With Class Using Object
// Defining a class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// Creating objects using the class
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 35);

// Accessing object properties and methods
console.log(person1.name); // Output: Alice
person1.greet(); // Output: Hello, my name is Alice

console.log(person2.age); // Output: 35
person2.greet(); // Output: Hello, my name is Bob


//? Without Class: Objects can be created using object literals or factory functions. This approach is straightforward but can become cumbersome for complex objects with many methods and properties.
//? With Class: Using classes provides a more structured and reusable way to create objects. It supports inheritance and encapsulation, making it easier to manage and extend code.