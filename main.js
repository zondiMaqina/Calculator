// display
let input =
document.getElementById("display") ;

let expression = "";
// storage buttons
let addition =
document.getElementById("addition") ;

let subtraction =
document.getElementById("subtract") ;

let multiplication =
document.getElementById("multiply") ;

let division =
document.getElementById("divide") ;

let equal =
document.getElementById("equal") ;

let number_option =
document.querySelectorAll(".num-opt");


// envoking function to update display
function updateDisplay(){
    input.value = expression;
}

// Each digit to display on their own on display screen;
let eachNumber = number_option.forEach((numberButton) => {

    numberButton.addEventListener("click", ()=>{
        return input.value += numberButton.innerText;
    })
});


// arithmetic operators

function remove(){
    input.value = null;
}


// operation function
function operate(){

}

