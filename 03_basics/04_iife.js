// An Immediately Invoked Function Expression (IIFE) is a common JavaScript design pattern that involves defining and 
// executing a function immediately after its creation. It is typically used to create a new scope for variables, 
// preventing them from polluting the global scope.

// The primary benefits of using IIFE include avoiding global namespace pollution, creating private variables, 
// and controlling variable scope. IIFE is commonly used in scenarios where you want to execute some code immediately 
// without leaving variables or functions in the global scope that might interfere with other parts of your program.

// preventing them from polluting the global scope.
(function chai(){
    // named IIFE
    console.log("DB Connected");
})();
// chai()

// () = function defination
// () = excution
// ; use to end 

(()=>{
    // with iife normal one
    console.log("Connected Succefully");
})();

// varibale pass
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');