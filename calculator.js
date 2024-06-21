function calc(){
    let firstNumber1 = parseInt( document.querySelector("#FirstNumber").value);
    let secondNumber2 =parseInt(document.querySelector("#SecondNumber").value); 
    let operator =(document.querySelector("#operator").value); 
    let calculate
    if (operator == "add"){
     calculate= (firstNumber1 + secondNumber2);
    }
    else if(operator == "min"){
        calculate=(firstNumber1 - secondNumber2);
    }
    
    else if( operator == "mul"){
        calculate=(firstNumber1 * secondNumber2);
    }
   
    else if(operator == "div"){
        calculate=(firstNumber1 / secondNumber2);
    }
    console.log(calculate);
    document.querySelector("#result").innerHTML=calculate;
}


