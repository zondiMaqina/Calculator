const calculatorOuput = document.querySelector('input');
let num1, num2, operatorChosen;

// when you want to run any operator or equal sign
function isCalculatorOutputNotEmpty() {
    return calculatorOuput.value !== '';
}

// when yopu want to run equal sign
function areNumbersSavedAvailable() {
    return num1 !== undefined && num2 !== undefined ;
}

// operator is a node
function saveOperatorPressed(operator) {
    if (['+', '-', '/', 'x'].includes(operator.textContent)) 
        return operatorChosen = operator.textContent;
}

function saveNum1OnOutput() {
    num1 = Number(calculatorOuput.value);
}

function saveNum2OnOutput() {
    num2 = Number(calculatorOuput.value);
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


function saveNumberAndOperator(operatorPressed) {
    if (isCalculatorOutputNotEmpty && num1 === undefined) {
        saveNum1OnOutput();
        saveOperatorPressed(operatorPressed);
        clear();
    } else if (num1 !== undefined && isCalculatorOutputNotEmpty) {
        saveNum2OnOutput();
        let operator = saveOperatorPressed(operatorPressed);
        saveOperationOnNumbers(operator, num1, num2);
    };
}

function displayTotal() {
    if (num1 !== undefined && isCalculatorOutputNotEmpty) {
        num2 = Number(calculatorOuput.value);
        saveOperationOnNumbers(operatorChosen, num1, num2);
        calculatorOuput.value = num1;
    };
}
