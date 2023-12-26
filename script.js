
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
  console.log(computationInput.value); //makes sense up to HERE  
});

// let userInput = processInput();
// console.log(userInput);

let tempresult = '';
let operator = getOperator(computationInput.value);
let nextinput = getNumber2(computationInput.value, operator);

tempresult = computationInput.value;
tempresult = calculatemulti(tempresult, nextinput, operator);
console.log("tempresult", tempresult);

// currentOperand.textContent = 0;


// numberButton.forEach((digitz) => {
//   digitz.addEventListener('click', function() {
//     storedNumber += digitz.value;
//     currentOperand.textContent = storedNumber;
//     console.log("lol",storedNumber);
//   })
// });

// const firstOperandSpan = document.getElementById('firstOperand');
// console.log("firstOperandSpan", firstOperandSpan);
// const operatorSpan = document.getElementById('operator');
// operatorSpan.textContent = value;
// console.log("operatorSpan", operatorSpan);
// const secondOperandSpan = document.getElementById('secondOperand');

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
  // recursive(tryInput, result, number1);
};
var result = 0;
function calculatemulti(number1, number2, operator) {
  // Get the selected option value
  // userInput = document.getElementById('computation').value;
  // number1, operator, number2 = processInput(unprocessed);
  // var selectedOption = document.getElementsByClassName("operatormulti");
  var a = number1;
  var b = number2;

  // var newop = operator;
  console.log("Newop:", operator);
  // console.log(typeof(operator));
  // Perform a function based on the selected option
  if (operator == '+') {
      result = add(a, b);
  } else if (operator == '-') {
      result = subtract(a, b);
  } else if (operator =='*') {
      result = multiply(a, b);
  } else if (operator == ''/'') {
      result = divide(a, b);
      console.log('div', result);
  
  }console.log("resultoutside", result);
  return result;
  };
  

// function recursive(tryInput, result) {
//   let operator = getOperator(tryInput);
//   // let number1 = parseInt(tryInput);
//   //eliminate the result from the tryInput
//   // newInput = tryInput.replace(result, '');
//   // let number2 = getNumber1(tryInput, operator);
//   console.log("recursive", number1, number2, result, operator);
//   var number1 = result; //good
//   // break expression
//   // let regex = /^([-+]?\d*\.?\d+)\s*([+\-*/])\s*(.*)/;
//   // let regex = /^([-+]?\d*\.?\d+)\s*([+\-*/])\s*(.*)/;
//   let regex = /^([-+]?\d*\.?\d+)\s*([+\-*/])\s*([-+]?\d*\.?\d+)\s*([+\-*/])\s*(.*)/;
//   let match = tryInput.match(regex);
//   let updatedExpression = tryInput;

//   if (match) {
//     let leftOperand = match[1];
//     let operator = match[2];
//     let blah = match[3];
//     let nextoperator = match[4];
//     console.log("nextoperator", nextoperator);
//     let remainingExpression = match[5];

//     // Replace the first part of the expression with the result
//     updatedExpression = result + ' ' + nextoperator + ' ' + remainingExpression;
//     console.log("updatedExpression", updatedExpression);

//     // operator = nextoperator;
//     let recursiveoperator = getOperator(updatedExpression);
//     number1 = parseInt(updatedExpression);
//     number2 = getNumber2(updatedExpression, operator);
//     let result = calculatemulti(number1, number2, recursiveoperator);
//     console.log("new2", newww);

//     //make recursive call

//     recursive(updatedExpression, result);

//     //break if base case
//     if (updatedExpression.length == 0) {
//       return result;};
//     };};


    // recursive(updatedExpression, result, number1);

  //replace first 2 numbers with result


  // now pop off the first 2 items in the string
  // poppedInput = tryInput[0];
  // const [firstexp, seconde, op] = tryInput.match(/(\d+)\s*([^\d\s]+)\s*(\d+)/).slice();
  // console.log("tryInput", tryInput);
  // const remaining = tryInput.slice(tryInput.indexOf("", tryInput.indexOf(" ") + 1) + 1); // Select everything after the third space
  // console.log("poppedInput", firstexp, seconde, op);
  // console.log("remaining", remaining);

  // OppoppedInput = tryInput.replace(firstexp, '');
  // console.log("poppedInputty", OppoppedInput); //we want this, it is everything but the first expression
  // poppedInput = OppoppedInput.slice(0);
  // console.log("poppedInput", poppedInput);
  // number2 = parseInt(poppedInput);
  // console.log("number2eee", number2);



  // recursive(modifiedInput, result, number1);

  // result = calculatemulti(number1, number2, operator);


  
  //now get number 2 to be the number 3


  
  // console.log("recursive-pre", number1, number2, operator);
  // result  = calculatemulti(number1, number2, operator);
  // remove = [number1, operator, number2];
  // console.log("remove", remove);
  // tryInput.split("operator");
  // console.log("tryInputsplit", tryInput);
  // recursiveInput = tryInput.replace(remove, '');
  // console.log("recursiveInput", recursiveInput);
  // console.log("recursive-post", number1, number2, operator);


function getOperator(tryInput) {
  console.log("tryInput2:", tryInput);
    // operator = tryInput.split("")[1];
  const matches = tryInput.match(/[+\-*/]/g);
  console.log(matches); // Output: ["+", "*", "/", "-"]
  // console.log(typeof(matches)); // Output: object
  // operator = matches[0];
  if (matches && matches.length > 0) {
    const operator = matches[0];
    console.log("Operator:", operator);
    return operator;
  } else {
    console.log("No operator found in tryInput");
    return null; // Or any other default value you want to return
  }
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

// document.querySelectorAll('.digitz').forEach(item => {
//   item.addEventListener('click', event => {
//       updateOperands(item.textContent)
//   })
// })


function clearText()  
{
    document.getElementById('output').value = " ";
    document.getElementById('computation').value = "";}  

    const outputSpan = document.getElementById("output");

    clearzy.addEventListener("click", () => {
      outputSpan.textContent = ""; // Clear the text content of the span
    });