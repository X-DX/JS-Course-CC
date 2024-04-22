const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give valid inputs ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give valid inputs ${weight}`
    } else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        
        if(bmi < 18)
        {
            const msg  = "Under Weight"
            results.innerHTML = `<span>${bmi} </br> ${msg}</span>`
        }

        if(bmi >= 18.6 && bmi <= 24.9)
        {
            const msg  = "Normal Range"
            results.innerHTML = `<span>${bmi} </br> ${msg}</span>`
        }
        
        if(bmi > 24.9)
        {
            const msg  = "Over Weight"
            results.innerHTML = `<span>${bmi} </br> ${msg}</span>`
        }

    }
    
})