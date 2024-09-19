

    'use strict';

    
    console.log('bmiscript.js loaded');

    function calculateBMI(){
        let height = parseFloat(document.getElementById('txtfldHeight').value / 100); 
        let weight = parseFloat(document.getElementById('txtfldWeight').value);


        console.log('Height (m):', height);
        console.log('Weight (kg):', weight);


        //checkin numbers
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert("Please enter valid numbers for height and weight.");
            return;
        }
        

        let result = weight / (height * height);
        

        result = Math.round(result * 10) / 10;
        console.log('BMI:', result);
        
        if (result < 18.5) {
            alert ("Underweight");
        } else if (result >= 18.5 && result < 24.9) {
            alert ("Normal weight");
        } else if (result >= 25 && result < 29.9) {
            alert ("Overweight");
        } else if (result >= 30) {
            alert ("Obesity");
        }
    
        
    };



    
    

    










