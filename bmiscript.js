

'use strict';

    
//console.log('bmiscript.js loaded');

function calculateBMI(){
    let height = parseFloat(document.getElementById('txtfldHeight').value / 100); 
    let weight = parseFloat(document.getElementById('txtfldWeight').value);

        
//console.log('Height (m):', height);
//console.log('Weight (kg):', weight);


//checkin numbers
if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("Please enter valid numbers for height and weight.");
    return;
}
        

let resultBmi = weight / (height * height);
        
//1 number after dot
resultBmi = Math.round(resultBmi * 10) / 10;
//console.log('BMI:', result);
        
if (resultBmi < 18.5) {
    alert ("Underweight");
} else if (resultBmi >= 18.5 && resultBmi < 24.9) {
    alert ("Normal weight");
} else if (resultBmi >= 25 && resultBmi < 29.9) {
    alert ("Overweight");
} else if (resultBmi >= 30) {
    alert ("Obesity");
}
    
        
};



    
    

    










