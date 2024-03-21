// user chooses first button for first number
// user chooses operator for sum
// user chooses second number
// presses equal to see sum


// storage
let input =
document.getElementById("display") ;

let operand_one;
let operand_two;
let operator;

let nine =
document.getElementById("nine") 

 // digit function
function num0(){
    input.value += 0;
}

function num1(){
    input.value += 1
}

function num2(){
    input.value += 2;

}

function num3(){
    input.value += 3;
 
}

function num4(){
    input.value += 4;

}

function num5(){
    input.value += 5;

}

function num6(){
    input.value += 6;

}

function num7(){
    input.value += 7;

}

function num8(){
    input.value += 8;

}

function num9(){
    input.value += nine.textContent;

}

function period(){
    input.value += ".";

}


function operate(){

}


// arithmetic operators

function subtract(){
}

function add(){
}

function multiply(){
}

function divide(){
}

function remove(){
    input.value = null;
}


function equal(){

}