//
//create functions for handling basic math
// (add,subtract,multiply,divide)
//create variables for storing operators, number x and y
//create a function operate that takes an operator and operands then calls one of the arithmetic functions
//
let operator = "";
let numX = "";
let numY = "";
let result = "";
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
function operate() {
  resultState ? (operandX = Number(result)) : (operandX = Number(numX));
  operandY = Number(numY);
  switch (operator) {
    case "multiply":
      result = multiply(operandX, operandY);
      break;
    case "divide":
      result = divide(operandX, operandY);
      break;
    case "subtract":
      result = subtract(operandX, operandY);
      break;
    case "add":
      result = add(operandX, operandY);
      break;
    case "modulus":
      result = modulus(operandX, operandY);
      break;
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
let resultState = false;
document.querySelector(".keypad").addEventListener("click", (event) => {
  let id = event.target.id;

  console.log(event.target.id);

  //==== reset functions ====
  // reset numX and numY

  function resetXandY() {
    numX = "";
    numY = "";
  }

  // reset everything

  function resetEverything() {
    numX = "";
    numY = "";
    result = "";
    operatorState = false;
    resultState = false;
  }

  //====results handling function ====

  //====switch case for operators====

  switch (event.target.id) {
    case "c":
      resetEverything();

      break;
    case "CE":
      resetEverything();
      break;

    case "equal":
      operatorState = false;

      operate();
      resultState = true;
      resetXandY();

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

  //buttonValue = disval;
  operatorState ? (numY += buttonValue) : (numX += buttonValue);
  buttonValue = "";
  updateDisplay(operatorState ? numY : resultState ? result : numX);
});

//operate(Number(numX), Number(numY))
