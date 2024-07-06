// JavaScript Type Conversion
// JavaScript type conversion involves changing a value from one type to another. 
//There are two types of type conversion in JavaScript: implicit (or type coercion) and explicit (or type casting).

// Implicit Type Conversion (Type Coercion)
// This occurs when JavaScript automatically converts types during operations.

// 1. String Conversion
let result1 = '5' + 3;  // '53'

// 2. Number Conversion
let result2 = '5' - 3;  // 2
let result3 = '5' * 3; // 15

// 3. Boolean Coversion
let result4 = !!0;      // false
let result5 = !!'abc'; // true


// Explicit Type Conversion (Type Casting)
// This occurs when you manually convert a value from one type to another using functions or operators.

// 1. String : use String()
let result11 = String(123);   // '123'
let result22 = String(true); // 'true'

// 2. Number: Number()
let result33 = Number('123');   // 123
let result44 = Number('abc');  // NaN

// 3. Boolean: Boolean()
let result55 = Boolean(0);      // false
let result66 = Boolean('abc'); // true


// ***************** Important *******

// 1. String() and toString()

// String() is a global function that can be used to convert any value to a string. 
//It can handle null and undefined values without throwing errors.

let num = 123;
let strNum = String(num); // '123'

let bool = true;
let strBool = String(bool); // 'true'

let nullValue = null;
let strNull = String(null); // 'null'

let undefinedValue = undefined;
let strUndefined = String(undefined); // 'undefined'

// toString() method returns an object as a string. toString() method returns "[object Object]" if it cannot return a string.
// Object.toString() always returns the object constructor. toString() method does not change the original object.

// array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.toString();

let arr = [1, 2, 3];
let strArr = arr.toString(); // '1,2,3'

// object
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  const keys1 = person1.toString();

  // 
  const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  const keys2 = Object.toString(person2);

//
let num2 = 123;
let strNum2 = num.toString(); // '123'

let bool2 = true;
let strBool2 = bool.toString(); // 'true'

// Unlike String(), toString() cannot be used on null or undefined directly without causing an error.
let nullValue2 = null;
let strNull2 = nullValue2.toString(); // TypeError: Cannot read properties of null (reading 'toString')

let undefinedValue2 = undefined;
let strUndefined2 = undefinedValue2.toString(); // TypeError: Cannot read properties of undefined (reading 'toString')
