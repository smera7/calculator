// Function to add two numbers
const add = (a, b) => parseFloat(a) + parseFloat(b);
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return 'Error: Division by zero';
  }
  // if input is a decimal
  test = a % 1;
  a = parseFloat(a);
  console.log("A:", a);
  b = parseFloat(b);
  console.log("B:", b);
  console.log("Test:", test);
  if (a % 1 != 0) {
    // convert to multiplication by 1/number
    console.log("a is a decimal");
    const roundedValue = Math.round(a * 100) / 100; // Round to two decimal places
  console.log("Rounded Value:", roundedValue);
  }

  parseit = parseFloat(a) / parseFloat(b);
  console.log("Parseit:", parseit);
  return parseit;
};

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
  console.log("Form submitted");
  e.preventDefault();
  tryInput = document.getElementById('computation').value;
  proccesing();
  getOperator(tryInput);
});

document.getElementById('displayequals').addEventListener('click', function (e) {
  console.log("Submit button clicked");
  e.preventDefault();
  tryInput = document.getElementById('computation').value;
  proccesing();
  getOperator(tryInput);
  // display result
  document.getElementById("output").innerText = getResult();
});

document.getElementById('clearzy').addEventListener('click', function (e) {
  console.log("Clear button clicked");
  e.preventDefault();
  tryInput = document.getElementById('computation').value;
  proccesing();
  getOperator(tryInput);
  // display nothing
  document.getElementById("output").innerText = "";
  // clear input
  document.getElementById('computation').value = "";
  location.reload();
});

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
        document.getElementById("output").innerText = getResult(); // this was outputting incorrectly
        // after some time clear it
        // setTimeout(function() {
        //   document.getElementById("output").innerText = "";
        // }, 5000); // simulates the clear function i guess
      }, 0);
      
    } else {
      // If it's not an operator, update currentInput
      currentInput += buttonText;
    }
  });
});

function proccesing() {
  var number1 = parseFloat(tryInput);
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
    // if result is a decimal, round it to 4 decimal places
    }
    if (result % 1 != 0) {
      result = result.toFixed(4);
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

    operator = nextoperator;
    
    number1 = parseInt(updatedExpression);
   
    number2 = getNumber2(updatedExpression, operator);
    resultcalcmulti = calculatemulti(number1, number2, operator);
    result = resultcalcmulti;
    // if (['+', '-', '*', '/'].includes(nextoperator)) {
    //   console.log("Resultcalcmulti:", result);
    // // document.getElementById("output").innerText = result;
    //  }
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

// function display(button) {
//   var computationInput = document.getElementById('computation');
//   if (result === '=' || result === '+' || result === '-' || result === '*' || result === '/') {
//     computationInput.value = result;
//   } 
//   else {
//     buttonText = button.textContent;
//     computationInput.value += buttonText;
//   };
//   // only display previous result and the nextoperator and the remaining expression

// }

function display(button) {
  var computationInput = document.getElementById('computation');
  var resultDisplay = document.getElementById('output');
  var buttonText = button.textContent;
  var result = resultDisplay.innerText.trim(); // Get the dynamic result
  // var sample = computationInput;
  // console.log("sampleresult", sample);
  // sampleresult = calculatemulti(parseFloat(sample), getNumber2(sample, getOperator(sample)), getOperator(sample));
  // var number1 = parseFloat(tryInput);
  // operator = getOperator(tryInput);
  // var number2 = getNumber2(tryInput, operator);
  // result = calculatemulti(number1, number2, operator);
  // console.log("ResultNOW:", result);

  if (isOperator(buttonText)) {
    // If the pressed button is an operator, update the input accordingly
    computationInput.value = getResult() + " " + buttonText + " ";
    console.log("is two?", computationInput.value)
  } 
  else {
    // If the pressed button is a digit, update the input accordingly
    if (result === '=' || isOperator(result)) {
      computationInput.value = buttonText;
      console.log("is one?", result);
    } else {
      computationInput.value += buttonText;
      // computationInput.value = result;
      console.log("is three?", computationInput.value);
    }
  }

  if (result !== "") {
    // If there is a dynamic result displayed, clear it
    resultDisplay.innerText = "";
  }
}

// Function to check if a button represents an operator
function isOperator(text) {
  return ['+', '-', '*', '/'].includes(text);
}

// Function to evaluate the current expression and return the result
function getResult() {
  var expression = computationInput.value.trim();
  console.log("Expression:", simulatEval(expression));
  return simulatEval(expression);
}

// function simulatEval(expression) {
//   // Your custom evaluation logic here
//   // Example: Split the expression into operands and operators and perform calculations
//   // Replace the following lines with your actual evaluation logic
//   expression = expression.replace(/(?<=\d)-/g, '-');
//   console.log("Expression negative", expression)
//   const parts = expression.split(/([+\-*/])/);
//   return parts.reduce((accumulator, current) => {
//     if (isOperator(current)) {
//       return accumulator; // Skip operators
//     }
//     int = parseFloat(current || 0);
//     console.log("Int:", int);
//     return accumulator + parseFloat(current || 0);
//   }, 0);
// }

// function simulatEval(expression) {
//   // Replace subtraction sign with a special character
//   expression = expression.replace(/(?<=\d)-/g, 'NEG');
  
//   // Split the expression into operands and operators
//   const parts = expression.split(/([+\-*/])/);
  
//   // Evaluate the expression
//   let result = 0;
//   let currentOperator = '+';

//   for (const part of parts) {
//     if (isOperator(part)) {
//       currentOperator = part;
//     } else {
//       const value = parseFloat(part || 0);
//       if (currentOperator === '+') {
//         result += value;
//       } else if (currentOperator === '-') {
//         result -= value;
//       } else if (currentOperator === '*') {
//         result *= value;
//       } else if (currentOperator === '/') {
//         result /= value;
//       }
//     }
//   }

//   return result;
// }

function simulatEval(expression) {
  // Split the expression into operands and operators
  const parts = expression.split(/([+\-*/])/);

  // Evaluate the expression
  let result = 0;
  let currentOperator = '+';
  let negate = false;

  for (const part of parts) {
    if (isOperator(part)) {
      currentOperator = part;
      negate = false;
    } else {
      const value = parseFloat(part || 0);
      const operand = negate ? -value : value;

      if (currentOperator === '+') {
        result += operand;
      } else if (currentOperator === '-') {
        result -= operand;
      } else if (currentOperator === '*') {
        result *= operand;
      } else if (currentOperator === '/') {
        result /= operand;
      }

      negate = currentOperator === '-' && part === '';
    }
  }

  return result;
}



function undisplay(button) {
  var computationInput = document.getElementById('computation');
  var result = computationInput.value; // Assuming result is the current value in the computation input

  if (result === '=' || result === '+' || result === '-' || result === '*' || result === '/') {
    computationInput.value = result;
  } else {
    var buttonText = button.textContent;
    var sample = computationInput.value.slice(0, -1); // Remove the last character
    // update output display accordingly as well
    sampleresult = calculatemulti(parseFloat(sample), getNumber2(sample, getOperator(sample)), getOperator(sample));
    console.log("Sample Result:", sampleresult);
    document.getElementById("output").innerText = getResult();
    computationInput.value = sample;
  }

  // if we have deleted everything, reload
  if (computationInput.value === '') {
    location.reload();
  }
}


const outputSpan = document.getElementById("output");

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