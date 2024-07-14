//! Objects 
// A javaScript object is an entity having state and behavior (Properties and method)
// Js objects have  a special property called prototype

// eg: of object (way 1 create object)
const student = {
    fullName: "Arup",
    marks: 34,
    printMarks: function() {   // 
        console.log(this.marks);
    }
};
student.printMarks(); // Outputs: 34

// this means current object

//? in JS every object contain a specail property called prototype (contain properties and method)
// eg
let arr = ["A","B","C","D"];
console.log(arr);
// when we print, in browser in output we also see the prototype (pre existing properties and function). eg of this
arr.push("E");
console.log(arr);

//! so prototype (properties and method) ----> objects (contain the properties of prototype)

//! we can create own own prototype
// both ways are correct calTax1 and calTax2
const emp = {
    calTax1() {
        console.log("This a Tax function1");
    },
    calTax2 : function() {
        console.log("This is also a Tax Function");
    }
}
emp.calTax1();

const karan = {
    salary : 50000,
    calTax1 : function() {
        console.log("This a Tax function2");
    }
}

//! Set Prototype usning __proto__
// we want emp object functions in karam object
karan.__proto__ = emp;
console.log(karan.calTax1);   

//! Note
//? Protype -> special properties -> contain in every object.
//?  type of prototype -> null or reference to an object
//? if object & prototype have same method, objects method will be used