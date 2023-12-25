
// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        zero_error = 'Error: Division by zero';
        return zero_error;
    }
    return a / b;
}

// console.log(add(2, 3));
var computationInput = document.getElementById('computation');

document.querySelector('form.userinput').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();
    console.log(computationInput.value);    
});

// let userInput = processInput();
// console.log(userInput);
var number1;
var number2;
var newop;
var result;

var tryInput; // Declare the variable at a global scope

document.querySelector('form.userinput').addEventListener('submit', function (e) {
  // Prevent the normal submission of the form
  e.preventDefault();

  // Access the input value using the declared variable
  tryInput = document.getElementById('computation').value;
  console.log("Inside event listener:", tryInput);

  // Call a function or execute code that needs the value
  proccesing();
});

// Function to do something with the value outside the event listener
function proccesing() {
  console.log("User entered:", tryInput);
  var number1 = parseInt(tryInput);
  console.log("Number 1:", number1);
  var operator = getOperator(tryInput);
  console.log("Operator:", operator);
  var number2 = getNumber2(tryInput, operator);
  console.log("Number 2:", number2);

  let result;

  // Perform a function based on the selected option
  if (operator === '+') {
      result = add(number1, number2);
  } else if (operator === '-') {
      result = subtract(number1, number2);
  } else if (operator === '*') {
      result = multiply(number1, number2);
  } else if (operator === '/') {
      result = divide(number1, number2);
      console.log(result);
  }
  return result;
}

proccesing();

function calculatemulti() {
  // Get the selected option value
  // userInput = document.getElementById('computation').value;
  // number1, operator, number2 = processInput(unprocessed);
  var selectedOption = document.getElementsByClassName("operatormulti");
  var a = number1;
  var b = number2;
  var newop = operator;
  console.log("Newop:", newop);
  let result;
  // Perform a function based on the selected option
  if (newop === '+') {
      result = add(a, b);
  } else if (newop === '-') {
      result = subtract(a, b);
  } else if (newop === '*') {
      result = multiply(a, b);
  } else if (newop === '/') {
      result = divide(a, b);
      console.log(result);

  }return result;}

  calculatemulti();

// You can also call someOtherFunction() directly if needed
//someOtherFunction();


// var nameInput = document.getElementById('name');

// // button function on click display
function display(button) {
    // Get the text content of the clicked button
    var buttonText = button.textContent;

    // Update the value of the input element with the button text content
    var computationInput = document.getElementById('computation');
    computationInput.value += buttonText;
    userInput = computationInput.value;
    
    if (buttonText === '=') {
        var buttonText = button.textContent;
        computationInput.value = '';
        // Perform the calculation
        result = calculatemulti();
        console.log(result);
        // Display the result
        computationInput.value = result;
    }
  }

function getOperator(expression) {
  const operators = ['+', '-', '*', '/'];
  for (let i = 0; i < operators.length; i++) {
      if (expression.includes(operators[i])) {
          const operator = operators[i].replace(/['"]+/g, '');
          console.log("Operator:", operator);
          return operator;
      }
  }
}

  function getNumber2(expression, operator) {
    const number2 = expression.split(operator)[1];
    console.log(number2);
    return parseInt(number2);}


function clear(button){
  var computationInput = document.getElementById('computation');
  document.getElementById("output").innerText = "";
}