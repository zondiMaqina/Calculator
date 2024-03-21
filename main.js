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

 // digit function
function num0(){
    input.value += 0;
}

function num1(){
    input.value += 1;
}

function num2(){
    
}

function num3(){
    
}

function num4(){
    
}

function num5(){
    
}

function num6(){
    
}

function num6(){
    
}

function num7(){
    
}

function num8(){
    
}

function num9(){
    
}

function period(){

}


function operate(){

    if (operator == add){
        return operand_one + operand_two ;

    } else if(operator = subtract){
        return operand_one - operand_two ;

    } else if (operator == multiply){
        return operand_one * operand_two ;

    }else if(operator == divide){
        return operand_one / operand_two ;
    }
    
}


// arithmetic operators

function subtract(){
    console.log('-');
}

function add(){
    console.log("+")
}

function multiply(){
    console.log("*")
}

function divide(){
    console.log("/")
}

function remove(){
    console.log("clear")
}