// display
let input =
document.getElementById("display") ;

// first and second input
let expression = "";
let expression2 = "";
let firstInput = "";
let secondInput = "";

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
        firstInput = expression;
        console.log(`firstInput is ${updateDisplay()}`);
        expression = "";
        input.value = "";
}


function remove(){
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

equal.addEventListener("click", function(){
    if (setfirstValue){
        expression2 = input.value;    
        secondInput = expression2;  
        console.log(getSecondValue());
        setfirstValue = false;
    }

    return input.value = Number(firstInput) + Number(secondInput);
})