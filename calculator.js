// function for addition
function add(number1, number2) {
    const addition = number1 + number2;
    return addition;
}

//function for subtraction
function subtract(number1, number2) {
    const subtraction = number1 - number2;
    return subtraction;
}

// function for multiplication
function multiply(number1, number2) {
    const multiplication = number1 * number2;
    return multiplication;
}

// function for division
function divide(number1, number2) {
    const division = number1 / number2;
    return division;
}

// function that takes an operator and two number and retyrns the outcome
function operate(number1, number2, operator) {
    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "*":
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
    }
};


//get DOM elements
const numberButton = document.querySelectorAll(".num");
const operatorButton = document.querySelectorAll(".oper");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');
const showResult = document.querySelector('.result');


currentOperand.textContent = ' ';
previousOperand.textContent = ' ';
let storedNumber = '';
let clickedOperator = ''
let firstNumber = '';
let result = '';
currentOperand.textContent = 0;

numberButton.forEach((number => {
    number.addEventListener("click", function() {
        storedNumber += number.id;
        currentOperand.textContent = storedNumber;
    })
}))

operatorButton.forEach((operator => {
    operator.addEventListener("click", function() {
        if (firstNumber && storedNumber) {
            displayResult();
          }
          // save the first number
          firstNumber = storedNumber;
      
          // get the operator that was clicked
          clickedOperator = operator.textContent;
          previousOperand.textContent = storedNumber + clickedOperator;
          storedNumber = '';
    })
}));

equalButton.addEventListener('click', function() {
    displayResult();
  });

function displayResult() {
result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator)
// update content of current operation with result and previous operand with the calculation, make storedNumber = result
currentOperand.textContent = result;
previousOperand.textContent = firstNumber + ' ' + clickedOperator + ' ' + storedNumber;
storedNumber = result;
console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber);
}

clearButton.addEventListener("click", function() {
    currentOperand.textContent = 0;
    previousOperand.textContent = ' ';
})