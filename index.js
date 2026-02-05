//
//create functions for handling basic math
// (add,subtract,multiply,divide)
//create variables for storing operators, number x and y
//create a function operate that takes an operator and operands then calls one of the arithmetic functions
//
let operator = "";
let numX = 0;
let numY = 0;


//====basic arithmetic functions====
function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}


function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

//====end basic arithmetic functions====

//====operate function that calls arithmetic function====
//
function operate(operandX, operandY){
    switch(operator){
        case  "multiply":
              return multiply(operandX, operandY)
        case  "divide":
              return divide(operandX, operandY)
        case  "subtract":
              return subtract(operandX, operandY)
        case  "add":
              return add(operandX, operandY)
        default:
            console.log("invalid operator/no operator have been specified")
}


}
