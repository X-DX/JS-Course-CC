const coding = ["js", "ruby", "java", "python", "cpp"]

//! for each  
//? higher order

//? Type 1
// use callback function in foreach
coding.forEach( function (item) {
    console.log(item);
} )

//? Type 2
// use arrow function
coding.forEach( (item) => {
    console.log(item);
})

//? call function in foreach
function printMe(item)
{
    console.log(item);
}

coding.forEach(printMe) // give ref only

//? 
coding.forEach((item, index, arr)=> {
    console.log(item, index, arr);
})

//? objects under array
const mycoding = [
    {
        languageName: "Javascript",
        languageFileName: "JS"
    },
    {
        languageName: "Java",
        languageFileName: "JAVA"
    },
    {
        languageName: "Python",
        languageFileName: "PY"
    },
]

mycoding.forEach( (item) => {
    console.log(item.languageName);
})