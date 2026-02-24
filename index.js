//
//create functions for handling basic math
// (add,subtract,multiply,divide)
//create variables for storing operators, number x and y
//create a function operate that takes an operator and operands then calls one of the arithmetic functions
//
let operator = "";
let numX = "";
let numY = "";
let result = null;
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
  if (b === 0) return "Error: can't divide by 0";
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

//====end basic arithmetic functions====
//
//

//==== start of keyboard event listener ====
function keyboardEvent() {
  document.addEventListener("keydown", (event) => {
    const keymap = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      ".": "period",
      // operators
      "+": "add",
      "-": "subtract",
      "/": "divide",
      "*": "multiply",
      "%": "modulus",
      //special keys
      c: "c",
      Backspace: "CE",
      Enter: "equal",
    };
    const buttonID = keymap[event.key];
    if (buttonID) {
      document.getElementById(buttonID).click();
    }
  });
}
//
//

//====operate function that calls arithmetic function====
//
function operate() {
  if (numX === "" && result === null) return;
  let operandX = resultState ? Number(result) : Number(numX);
  let operandY = Number(numY);
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
  if (typeof result === "number") result = parseFloat(result.toFixed(10));
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
    result = null;
    operatorState = false;
    resultState = false;
  }

  //====results handling function ====

  switch (event.target.id) {
    case "c":
      resetEverything();

      break;
    case "CE":
      operatorState ? (numY = numY.slice(0, -1)) : (numX = numX.slice(0, -1));
      updateDisplay(operatorState ? numY : numX);
      break;

    case "equal":
      if (!operatorState) break;

      operatorState = false;

      operate();
      numX = result;
      numY = "";
      resultState = true;
      // resetXandY();

      break;
  }
  // ==== switch case for math operators====
  switch (event.target.id) {
    case "modulus":

    case "multiply":

    case "divide":

    case "subtract":

    case "add":
      if (numX !== "" && numY !== "" && operator !== "") {
        operate();
        resultState = true;
        numX = result;
        numY = "";
        // updateDisplay(result);
      }
      operatorState = true;
      operator = `${event.target.id}`;

      break;
  }
  //====switch case for digits ====
  switch (event.target.id) {
    case "seven":
      if (resultState && !operatorState) {
        resetEverything();
      }
      buttonValue += "7";

      break;
    case "eight":
      if (resultState && !operatorState) {
        resetEverything();
      }
      buttonValue += "8";
      break;
    case "nine":
      if (resultState && !operatorState) {
        resetEverything();
      }
      buttonValue += "9";
      break;

    case "four":
      if (resultState && !operatorState) {
        resetEverything();
      }
      buttonValue += "4";
      break;
    case "five":
      if (resultState && !operatorState) {
        resetEverything();
      }
      buttonValue += "5";
      break;
    case "six":
      if (resultState && !operatorState) {
        resetEverything();
      }
      buttonValue += "6";
      break;

    case "one":
      if (resultState && !operatorState) {
        resetEverything();
      }
      buttonValue += "1";
      break;
    case "two":
      if (resultState && !operatorState) {
        resetEverything();
      }
      buttonValue += "2";
      break;
    case "three":
      if (resultState && !operatorState) {
        resetEverything();
      }
      buttonValue += "3";
      break;

    case "zero":
      if (resultState && !operatorState) {
        resetEverything();
      }
      buttonValue += "0";
      break;
    case "dzero":
      if (resultState && !operatorState) {
        resetEverything();
      }
      buttonValue += "00";
      // use 00 in quotes coz leading zeroes is invalid syntax (it's considered octal literals)
      // SyntaxError: Octal literals are not allowed in strict mode
      break;
    case "period":
      if (resultState && !operatorState) {
        resetEverything();
      }
      if ((operatorState ? numY : numX).includes(".")) break;
      buttonValue += ".";
      break;

    // case "CE":
  }

  operatorState ? (numY += buttonValue) : (numX += buttonValue);
  buttonValue = "";
  updateDisplay(operatorState ? numY : resultState ? result : numX);
});

//operate(Number(numX), Number(numY))

keyboardEvent();
