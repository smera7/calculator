// Function to add two numbers
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0) ? 'Error: Division by zero' : a / b;

var computationInput = document.getElementById('computation');

var number1;
var number2;
var operator;
var result;

let tryInput;

document.querySelectorAll('.digitz').forEach(function(button) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    var computationInput = document.getElementById('computation');
    var buttonText = button.textContent;


    // keep /[+\-*/]\d+[+\-*/]/

    if (computationInput.value === '' || /[+\-*/]/.test(computationInput.value)) {
      console.log("Number is not the first");
      e.preventDefault();
      tryInput = document.getElementById('computation').value;
      proccesing();
      // document.getElementById("output").innerText = result;
    } else {
      console.log("Number is the first");
      // Your logic for the case when the number is not the first
    }
  });
});

function isOperator(text) {
  return text === '+' || text === '-' || text === '*' || text === '/';
}

var resultDisplayed = false;

document.querySelector('form.userinput').addEventListener('submit', function (e) {
  e.preventDefault();
  tryInput = document.getElementById('computation').value;
  proccesing();
  getOperator(tryInput);
});

// document.querySelectorAll('.digitz, .operatormulti').forEach(function(button) {
//   button.addEventListener('click', function(e) {
//     e.preventDefault();
//     // console.log("Button clicked:", button.textContent);
//     buttonText = button.textContent;
    
//       operatorPressed = true;
//       proccesing();
//       // console.log("operator caught");
//       currentInput += buttonText;
//       result = 
//       document.getElementById("output").innerText = result;

  
//     // else {
//     //   console.log("updating with button text", currentInput);
//     // }
//   });
// });

document.querySelectorAll('.digitz, .operatormulti').forEach(function(button) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    buttonText = button.textContent;

    if (buttonText === "=" || buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
      operatorPressed = true;

      // Call proccesing() asynchronously
      setTimeout(function() {
        proccesing();
        // Update the result and display it
        document.getElementById("output").innerText = result;
        // after some time clear it
        setTimeout(function() {
          document.getElementById("output").innerText = "";
        }, 80000); // simulates the clear function i guess
      }, 0);
      
    } else {
      // If it's not an operator, update currentInput
      currentInput += buttonText;
    }
  });

  // button.addEventListener('click', async function(e) {
  //   e.preventDefault();
    
  //   buttonText = button.textContent;
  
  //   if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
  //     operatorPressed = true;
  
  //     // Use a Promise to ensure asynchronous behavior
  //     await new Promise(resolve => setTimeout(resolve, 0));
  
  //     // Call proccesing() after the delay
  //     proccesing();
  
  //     // Update the result and display it
  //     document.getElementById("output").innerText = result;
  //   } else {
  //     // If it's not an operator, update currentInput
  //     currentInput += buttonText;
  //   }
  // });
  
});


function proccesing() {
  var number1 = parseInt(tryInput);
  operator = getOperator(tryInput);
  var number2 = getNumber2(tryInput, operator);
  calculatemulti(number1, number2, operator);
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
  console.log("actual result variable:", result);
  // document.getElementById("output").innerText = result;
  return result;
};

function recursive(tryInput, result, number1) {

  var operator = getOperator(tryInput);
  const regex = /^([-+]?\d*\.?\d+)\s*([+\-*/])\s*([-+]?\d*\.?\d+)\s*([+\-*/])\s*(.*)/;
  const match = tryInput.match(regex);

  if (!tryInput || tryInput.length === 0) {
    console.log("Base case reached. Result:", result);
    return result;
  }

  if (match) {
    const leftOperand = match[1];
    let operator = match[2];
    const blah = match[3];
    let nextoperator = match[4];
    const remainingExpression = match[5];
    const updatedExpression = result + ' ' + nextoperator + ' ' + remainingExpression;
    console.log("Updated expression:", updatedExpression);
    operator = nextoperator;
    console.log("nextOperator:", operator);
    number1 = parseInt(updatedExpression);
    console.log("number1:", number1);
    number2 = getNumber2(updatedExpression, operator);
    resultcalcmulti = calculatemulti(number1, number2, operator);
    result = resultcalcmulti;
    if (['+', '-', '*', '/'].includes(nextoperator)) {
      console.log("Resultcalcmulti:", result);
    // document.getElementById("output").innerText = result;
     }
    return recursive(updatedExpression, result, number1);
  }
};

currentInput = '';



recursive(tryInput, result, number1);

function getOperator(tryInput) {
  const matches = tryInput.match(/[+\-*/]/g);
  operator = matches ? matches[0] : null;
  return operator;
}

function getNumber2(tryInput, operator) {
  number2 = tryInput.split(/[+\-*/]/g)[1];
  parseInt(number2);
  number2 = Number(number2);
  return number2;
};

function display(button) {
  var computationInput = document.getElementById('computation');
  if (result === '=' || result === '+' || result === '-' || result === '*' || result === '/') {
    computationInput.value = result;
  } 
  else {
    buttonText = button.textContent;
    computationInput.value += buttonText;
  };
}
const outputSpan = document.getElementById("output");

// clearzy.addEventListener("click", () => {
//   outputSpan.textContent = "";
//   document.getElementById("output").innerText = "";
//   localStorage.clear();
//   sessionStorage.clear();
//   location.reload();
// });
console.log("Adding event listener to clearzy");
var clearzy = document.getElementById("clearzy");
console.log("Clearzy element:", clearzy);

clearzy.addEventListener("click", () => {
  outputSpan.textContent = "";
  localStorage.clear();
  sessionStorage.clear();
  location.reload();
  console.log("Reload triggered");
});
