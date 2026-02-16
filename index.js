//
//create functions for handling basic math
// (add,subtract,multiply,divide)
//create variables for storing operators, number x and y
//create a function operate that takes an operator and operands then calls one of the arithmetic functions
//
let operator = "";
let numX = 0;
let numY = 0;
let defaultDisplayValue = 0;

//====basic arithmetic functions====
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

//====end basic arithmetic functions====
//
//
//

//====operate function that calls arithmetic function====
//
function operate(operandX, operandY) {
  switch (operator) {
    case "multiply":
      return multiply(operandX, operandY);
    case "divide":
      return divide(operandX, operandY);
    case "subtract":
      return subtract(operandX, operandY);
    case "add":
      return add(operandX, operandY);
    default:
      console.log("invalid operator/no operator have been specified");
  }
}
//====end of operate function====

//====update display function====
function updateDisplay(displayValue) {
  let display = document.getElementById("display");

  display.value = displayValue;
}
//====end of display function====

updateDisplay(defaultDisplayValue);

//====event listener for keypad buttons====

document.querySelector(".keypad").addEventListener("click", (event) => {
  let id = event.target.id;
  let disval = "";
  console.log(event.target.id);
  switch (event.target.id) {
    case "c":
      console.log("C was clicked");
      disval = 0;
      break;
    case "CE":
      console.log("CE was clicked");
      disval = 0;
      break;
    case "modulus":
      console.log("modulus was clicked");
      disval = "%";
      break;
    case "multiply":
      console.log("multiply was clicked");
      disval = "X";
      break;
    case "seven":
      console.log("seven was clicked");
      disval = 7;
      break;
    case "eight":
      disval = 8;
      break;
    case "nine":
      disval = 9;
      break;
    case "divide":
      disval = "/";
      break;
    case "four":
      disval = 4;
      break;
    case "five":
      disval = 5;
      break;
    case "six":
      disval = 6;
      break;
    case "minus":
      disval = "-";
      break;
    case "one":
      disval = 1;
      break;
    case "two":
      disval = 2;
      break;
    case "three":
      disval = 3;
      break;
    case "plus":
      disval = "+";
      break;
    case "zero":
      disval = 0;
      break;
    case "dzero":
      disval = "00";
      // use 00 in quotes coz leading zeroes is invalid syntax (it's considered octal literals)
      break;
    case "period":
      disval = ".";
      break;
    case "equal":
      disval = "=";
      break;

    // case "CE":
  }

  updateDisplay(disval);
});
