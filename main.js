// display
let input =
document.getElementById("display") ;

// first and second input
let expression = "";
let expression2 = "";
let firstInput = "";
let secondInput = "";
let count = 0;

let chosen_operator;
let chosen;
let fullExpression ;
let setfirstValue = false

// storage buttons
let equal =
document.getElementById("equal") ;

let number_option =
document.querySelectorAll(".num-opt");


// envoking function to update display
function updateDisplay(){
   return expression = firstInput;
}

function getFirstValue(){
    return input.value = expression;
}

function getSecondValue(){
    if (firstInput !== "" && input.value == ""){
        secondInput = expression2;   
        return secondInput;
    }
}

function chosenOperator(){
    chosen = chosen_operator;
    return chosen;
}


// Each digit to display on their own on display screen;
let eachNumber = number_option.forEach((numberButton) => {

    numberButton.addEventListener("click", ()=>{
        expression += numberButton.innerText;
        getFirstValue();
    
    })

});


// arithmetic operators
function addOperator(operator){

        setfirstValue = true;
        count++
        firstInput = expression;
        console.log(`firstInput is ${updateDisplay()}`);
        expression = "";
        if (firstInput !== ""){
            chosen_operator = operator;
            chosenOperator();
        }
}


function remove(){
    count =0;
    expression = ""; 
    expression2 = "";
    firstInput = "";
    secondInput = "";
    input.value = "";
    console.log(firstInput, secondInput, expression)
}

// operation function
function operate(){

}

 function result(){

    if (setfirstValue){
        expression2 = input.value;    
        secondInput = expression2;  
        console.log(getSecondValue());
        setfirstValue = false;
    }

    if (chosen_operator == "+"){
        let fullExpression =
         input.value = Number(firstInput) + Number(secondInput);

        return fullExpression;

    } else if (chosen_operator == "*"){
        let fullExpression = input.value = Number(firstInput) * Number(secondInput);

        return fullExpression;

    } else if (chosen_operator == "/"){
        let fullExpression = input.value = Number(firstInput) / Number(secondInput);

        return fullExpression;

    }else if (chosen_operator == "-"){
        let fullExpression = input.value = Number(firstInput) - Number(secondInput);

        return fullExpression;
    }

}
equal.onclick = result;