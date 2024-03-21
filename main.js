
// storage buttons
let addition =
document.getElementById("addition") ;

let subtraction =
document.getElementById("subtract") ;

let multiplication =
document.getElementById("multiply") ;

let division =
document.getElementById("divide") ;

let input =
document.getElementById("display") ;

let number_option =
document.querySelectorAll(".num-opt");


 // Each digit to display on their own on display screen;
let eachNumber = number_option.forEach((numberButton) => {

    numberButton.addEventListener("click", ()=>{
        return input.value += numberButton.innerText;
    })
});

// arithmetic operators

addition.addEventListener("click", function() {
    return "hello"
})

subtraction.addEventListener("click", function() {
    return "hello"
})

division.addEventListener("click", function() {
    return "hello"
})

multiplication.addEventListener("click",function() {

})


function remove(){
    input.value = null;
}


// operation function
function operate(){

}

function equal(){

}
