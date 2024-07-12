//! fetch API (application programming interface)
//* the fetch API provides an interface for fetching (sending/receving) resources. 
//* its uses request and response objects.
//* The fetch() method is used to fetch a resource (data)

// eg: promise = fetch(url, [option]) 

// eg: promise = fetch(url) // here we are sending only url then this request is call GET request (Maximum time we use this)

//? Important terms:
//* AJAX: Asynchronous JS & XML
//* JSON: javascript object natation (AJAJ)
// when we do API request we get a respone in JSON, but we have to convert into js object (use json())
//* json(): return a second promise that resolves with the request of parsing the response body text at JSON. (input is JSON, output is JS object)


// eg: (normal fetch API)
const URL = "https://cat-fact.herokuapp.com/facts";
// let promise = fetch(URL);
// console.log(promise);

// use async-await
const catFacts = document.querySelector('#facts');
const btn = document.querySelector('#btn');
console.log(btn);

const getFacts = async () => {
    console.log("Getting Data .....");
    let response = await fetch(URL); // GET Request 
    console.log(response);  // in browser its showing in different format so we cant able to read it. for that use AJAX, JSON, json()
    let data = await response.json(); // convert into js object
    console.log(data);
    catFacts.innerText = data[0].text;
    catFacts.style.color = "#ff0000";
};

// use promise chain
function getFacts2(){
    fetch(URL).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        catFacts.innerText = data[1].text;
        catFacts.style.color = "blue";
    })
}

// btn.addEventListener("click", getFacts);
btn.addEventListener("click", getFacts2);

