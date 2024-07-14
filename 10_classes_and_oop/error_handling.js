// Error handling in JavaScript can be done using try...catch blocks.
// syntax
try {
    // Code that may throw an error
} catch (error) {
    // Code to handle the error
} finally {
    // Optional: code that will run regardless of success or error
}

// eg:
function riskyOperation() {
    throw new Error("Something went wrong!");
}

try {
    riskyOperation();
} catch (error) {
    console.error("Error caught:", error.message);
} finally {
    console.log("This will run no matter what.");
}

// Best Practices
// Always handle errors gracefully to improve user experience.
// Use specific error messages to help with debugging.
// Consider using Promise.catch for asynchronous operations.

// eg with promise
fetch('https://api.example.com/data')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error("Fetch error:", error.message);
});

