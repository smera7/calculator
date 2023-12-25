// const { get } = require("http");

// const { type } = require("os");

// const { get } = require("http");

// const { get } = require("http");

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
  result = a / b;
  console.log("result-lalala", result);
  return result;
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
var operator;
var result;

let tryInput; // Declare the variable at a global scopes


document.querySelector('form.userinput').addEventListener('submit', function (e) {
// Prevent the normal submission of the form
e.preventDefault();

// Access the input value using the declared variable
tryInput = document.getElementById('computation').value;
console.log("Inside event listener:", tryInput);

// Call a function or execute code that needs the value
proccesing();
getOperator(tryInput);
});

// Function to do something with the value outside the event listener
function proccesing() {
console.log("User entered:", tryInput); 
var number1 = parseInt(tryInput);
console.log("Number 1:", number1);
operator = getOperator(tryInput);
console.log("OperatorZs:", operator);
var number2 = getNumber2(tryInput, operator);

calculatemulti(number1, number2, operator);
console.log("first expression separated", number1, number2, operator);

//calculate multi 
  document.getElementById("output").innerText = result;
  recursive(tryInput, result, number1);
};
function calculatemulti(number1, number2, operator) {
  // Get the selected option value
  // userInput = document.getElementById('computation').value;
  // number1, operator, number2 = processInput(unprocessed);
  // var selectedOption = document.getElementsByClassName("operatormulti");
  var a = number1;
  var b = number2;

  // var newop = operator;
  console.log("Newop:", operator);
  console.log(typeof(operator));
  // Perform a function based on the selected option
  if (operator == '+') {
      result = add(a, b);
  } else if (operator == '-') {
      result = subtract(a, b);
      console.log('subt', result);
  } else if (operator =='*') {
      result = multiply(a, b);
  } else if (operator == ''/'') {
      result = divide(a, b);
      console.log('div', result);
  
  }console.log("wackadoor", result);
  return result;
  };
  

function recursive(tryInput, result, number1) {
  var operator = getOperator(tryInput);
  var number1 = parseInt(tryInput);
  //eliminate the result from the tryInput
  tryInput = tryInput.replace(result, '');
  // var number2 = getNumber1(tryInput, operator);

  var number1 = result; //good

  // now pop off the first 2 items in the string
  // poppedInput = tryInput[0];
  const [firstNumber, op, secondNumber] = tryInput.match(/(\d+)\s*([^\d\s]+)\s*(\d+)/).slice();
  const remaining = tryInput.slice(tryInput.indexOf("", tryInput.indexOf(" ") + 1) + 1); // Select everything after the third space
  console.log("poppedInput", firstNumber, op, secondNumber, remaining);


  //now get number 2 to be the number 3
  
  console.log("recursive-pre", number1, number2, operator);
  result  = calculatemulti(number1, number2, operator);
  remove = [number1, operator, number2];
  console.log("remove", remove);
  tryInput.split("operator");
  console.log("tryInputsplit", tryInput);
  recursiveInput = tryInput.replace(remove, '');
  console.log("recursiveInput", recursiveInput);
  console.log("recursive-post", number1, number2, operator);
  return result;};


function getOperator(tryInput) {
  console.log("tryInput2:", tryInput);
    // operator = tryInput.split("")[1];
  const matches = tryInput.match(/[+\-*/]/g);
  console.log(matches); // Output: ["+", "*", "/", "-"]
  console.log(typeof(matches)); // Output: object
  operator = matches[0];

  console.log("Operator:", operator);
  return operator;
};

function getNumber2(tryInput, operator) {
  number2 = tryInput.split(/[+\-*/]/g)[1];
  parseInt(number2);
  number2 = Number(number2);
  console.log("Number 2:", number2);
  return number2;
};

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


// function clear(){
// document.getElementById("computation").value = ' ';
// // document.getElementById("output").innerText = result;
// }

function clearText()  
{
    document.getElementById('output').value = " ";
    document.getElementById('computation').value = "";}  

    const outputSpan = document.getElementById("output");

    clearzy.addEventListener("click", () => {
      outputSpan.textContent = ""; // Clear the text content of the span
    });