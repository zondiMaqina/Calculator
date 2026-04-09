const calculatorOuput = document.querySelector('input');
const allOperators = {add: '+', subtract: '-', multiply: 'x', division: '/'};
let num1, num2, operatorChosen;

// when you want to run any operator or equal sign
function isCalculatorOutputEmpty() {
    return calculatorOuput.value === '';
}

// when yopu want to run equal sign
function areNumbersSavedAvailable() {
    return num1 !== undefined && num2 !== undefined ;
}