//
//create functions for handling basic math
// (add,subtract,multiply,divide)
//create variables for storing operators, number x and y
//create a function operate that takes an operator and operands then calls one of the arithmetic functions
//
let operator = "";
let numX = "";
let numY = "";
let defaultDisplayValue = 0;
let operatorState = false;

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

function modulus(a, b) {
  return a % b;
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
    case "modulus":
      return modulus(operandX, operandY);
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

//updateDisplay(defaultDisplayValue);

//====event listener for keypad buttons====
let buttonValue = "";
let disval = "";
document.querySelector(".keypad").addEventListener("click", (event) => {
  let id = event.target.id;

  console.log(event.target.id);
  //====switch case for operators====

  switch (event.target.id) {
    case "c":
      disval = "";

      break;
    case "CE":
      disval = "";
      break;

    case "equal":
      disval = "=";
      break;
  }
  // ==== switch case for math operators====
  switch (event.target.id) {
    case "modulus":
      disval = "%";
      operatorState = true;
      operator = `${event.target.id}`;

      break;
    case "multiply":
      disval = "X";
      operatorState = true;
      operator = `${event.target.id}`;

      break;
    case "divide":
      disval += "/";
      operatorState = true;
      operator = `${event.target.id}`;

      break;
    case "subtract":
      disval = "-";
      operatorState = true;
      operator = `${event.target.id}`;

      break;
    case "add":
      disval = "+";
      operatorState = true;
      operator = `${event.target.id}`;

      break;
  }
  //====switch case for digits ====
  switch (event.target.id) {
    case "seven":
      buttonValue += "7";
      break;
    case "eight":
      buttonValue += "8";
      break;
    case "nine":
      buttonValue += "9";
      break;

    case "four":
      buttonValue += "4";
      break;
    case "five":
      buttonValue += "5";
      break;
    case "six":
      buttonValue += "6";
      break;

    case "one":
      buttonValue += "1";
      break;
    case "two":
      buttonValue += "2";
      break;
    case "three":
      buttonValue += "3";
      break;

    case "zero":
      buttonValue += "0";
      break;
    case "dzero":
      buttonValue += "00";
      // use 00 in quotes coz leading zeroes is invalid syntax (it's considered octal literals)
      // SyntaxError: Octal literals are not allowed in strict mode
      break;
    case "period":
      buttonValue += ".";
      break;

    // case "CE":
  }
  (disval == "") | (disval == 0)
    ? (disval = "")
    : console.log("display value is not zero or undefined");

  //buttonValue = disval;
  operatorState ? (numY += buttonValue) : (numX += buttonValue);
  buttonValue = "";
  updateDisplay(operatorState ? numY : numX);
});

//operate(Number(numX), Number(numY))
