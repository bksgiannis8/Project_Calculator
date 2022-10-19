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
function operate(operator, number1, number2) {
    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "+":
            return multiply(number1, number2);
        case "+":
            return divide(number1, number2);
    }
};


//get DOM elements
const numberButton = document.querySelectorAll(".num");
const operatorButton = document.querySelectorAll(".oper");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");

