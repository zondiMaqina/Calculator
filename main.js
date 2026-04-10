const calculatorOuput = document.querySelector('input');
let num1, num2, operatorChosen;

// when you want to run any operator or equal sign
function isCalculatorOutputEmpty() {
    return calculatorOuput.value === '';
}

// when yopu want to run equal sign
function areNumbersSavedAvailable() {
    return num1 !== undefined && num2 !== undefined ;
}

// operator is a node
function returnOperatorPressed(operator) {
    if (['+', '-', '/', 'x'].includes(operator.textContent)) {
        operatorChosen = operator.textContent;
        return operatorChosen;
    };
}

function saveNum1OnOutput() {
    num1 = Number(calculatorOuput.textContent);
}

function saveNum2OnOutput() {
    num2 = Number(calculatorOuput.textContent);
}

// saves current operation on operands to num1
function saveOperationOnNumbers(operatorPressed, number1, number2) {
    switch (operatorPressed) {
        case '+':
            num1 = number1 + number2;
            break;
        case '-':
            num1 = number1 - number2;
            break;
        case 'x':
            num1 = number1 * number2;
            break;
        case '/':
            num1 = number1 / number2;
            break;
    }
    num2 = undefined;
}

// clears input valuu
function clear() {
    calculatorOuput.value = '';
}

// for each number (node) button, adds its digit to input element display
function addNumberToOutput(number) {
    calculatorOuput.value += number.textContent;
}

function resetAll() {
    num1 = undefined;
    num2 = undefined;
    operatorChosen = undefined;
}