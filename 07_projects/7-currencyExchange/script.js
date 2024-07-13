const apiKey = "453b43b410f75e41ff0c1b15";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${apiKey}/enriched`;

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

// console.log(countryCode);
let i = 0;
for(let select of dropdowns){
     for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }

        if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
     }
     select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
     })
}

const updateFlag = (element) => {
    // console.log(element);
    let currCodeChange = element.value;
    let countryCodeChange = countryList[currCodeChange]; 
    let newSrc = `https://flagsapi.com/${countryCodeChange}/flat/64.png`;

    let img = element.parentElement.querySelector('img');
    img.src = newSrc;
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtvalue = amount.value;
    if(amtvalue === '' || amtvalue < 1)
    {
         amtvalue = 1;
         amount.value = "1";
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()]
});