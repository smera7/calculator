// Function to add two numbers
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0) ? 'Error: Division by zero' : a / b;

var computationInput = document.getElementById('computation');

document.querySelector('form.userinput').addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(computationInput.value);
});

var number1;
var number2;
var operator;
var result;

let tryInput;

document.querySelector('form.userinput').addEventListener('submit', function (e) {
  e.preventDefault();
  tryInput = document.getElementById('computation').value;
  proccesing();
  getOperator(tryInput);
});

function proccesing() {
  var number1 = parseInt(tryInput);
  operator = getOperator(tryInput);
  var number2 = getNumber2(tryInput, operator);
  calculatemulti(number1, number2, operator);
  document.getElementById("output").innerText = result;
  recursive(tryInput, result, number1);
};

function calculatemulti(number1, number2, operator) {
  var a = number1;
  var b = number2;
  if (operator == '+') {
    result = add(a, b);
  } else if (operator == '-') {
    result = subtract(a, b);
  } else if (operator == '*') {
    result = multiply(a, b);
  } else if (operator == '/') {
    result = divide(a, b);
  }
  console.log("Result:", result); // Add console.log to display the result
  return result;
};

function recursive(tryInput, result, number1) {
  var operator = getOperator(tryInput);
  const regex = /^([-+]?\d*\.?\d+)\s*([+\-*/])\s*([-+]?\d*\.?\d+)\s*([+\-*/])\s*(.*)/;
  const match = tryInput.match(regex);
  if (match) {
    const leftOperand = match[1];
    let operator = match[2];
    const blah = match[3];
    let nextoperator = match[4];
    const remainingExpression = match[5];
    const updatedExpression = result + ' ' + nextoperator + ' ' + remainingExpression;
    operator = nextoperator;
    number2 = getNumber2(updatedExpression, operator);
    var newww = calculatemulti(number1, number2, operator);
  };
};

function getOperator(tryInput) {
  const matches = tryInput.match(/[+\-*/]/g);
  operator = matches[0];
  return operator;
};

function getNumber2(tryInput, operator) {
  number2 = tryInput.split(/[+\-*/]/g)[1];
  parseInt(number2);
  number2 = Number(number2);
  return number2;
};

function display(button) {
  var buttonText = button.textContent;
  var computationInput = document.getElementById('computation');
  computationInput.value += buttonText;
  userInput = computationInput.value;
  if (buttonText === '=') {
    var buttonText = button.textContent;
    computationInput.value = '';
    result = calculatemulti();
    computationInput.value = result;
  }
}

function clearText() {
  document.getElementById('output').value = " ";
  document.getElementById('computation').value = "";
}

const outputSpan = document.getElementById("output");

clearzy.addEventListener("click", () => {
  outputSpan.textContent = "";
});
