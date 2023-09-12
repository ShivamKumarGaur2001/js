const form = document.querySelector("form")

// to stop default 
// we want to take value just before form get submit as if take initial values then it take empty values at initial if we use below case
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results =document.querySelector('#results')
    if (height ==='' || height <0 || isNaN(height)) { // NaN --> not a number
        results.innerHTML=`please give a valid height ${height}`
    }
    else if (weight ==='' || weight <=0 || isNaN(weight)) { // NaN --> not a number
        results.innerHTML=`please give a valid height ${weight}`
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`<span>${bmi}</span>`
    }

})