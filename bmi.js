const form=document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const height= parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    
    if(height=='' || isNaN(height) || height<0){
        results.innerHTML="please give a valid height"
    }else if(weight=='' || isNaN(weight) || weight<0){
        results.innerHTML="please give a valid weight"
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        // show the result
        //results.innerHTML=`<span>${bmi}</span>`
        if(bmi<18.6){
            results.innerHTML=`<p>under weight</p> <span>${bmi}</span>`
        }
        if(bmi<18.6 && bmi<24.9){
            results.innerHTML=`<P>Normal range</p> <span>${bmi}</span>`
        }
        if(bmi>24.9){
            results.innerHTML=`<p>over weight</p> <span>${bmi}</span>`
        }
       
    }
})