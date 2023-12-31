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
        // document.getElementById("output").innerText = getResult(); // this was outputting incorrectly
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
  //   if (result % 1 != 0) {
  //     result = result.toFixed(4);
  // }
  if (!isNaN(result) && result !== Infinity && result !== -Infinity) {
    result = result.toFixed(4);
  }
  
  console.log("actual result variable:", result);
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
  var result = resultDisplay.innerText.trim(); // Get the dynamic result displayed

  if (isOperator(buttonText)) {
    // If the pressed button is an operator, update the input accordingly
    computationInput.value = getResult() + " " + buttonText + " ";
    resultDisplay.innerText = computationInput.value.slice(0, -2); // had to fix from getResult();
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
// function getResult() {
//   var expression = computationInput.value.trim();
//   console.log("Expression:", simulatEval(expression));
//   return simulatEval(expression);
// }

function getResult() {
  var expression = computationInput.value.trim();
  var result = simulatEval(expression);
  console.log("what is simulateval:", simulatEval(expression));
  return simulatEval(expression);
}


// function simulatEval(expression) {
//   // Split the expression into operands and operators
//   const parts = expression.split(/([+\-*/])/);

//   // Evaluate the expression
//   // if (currentOperator === '+' || currentOperator === '-') {
//   //   console.log("its zero", currentOperator)
//   //   let result = 0;}
//   // else if (currentOperator === '*' || currentOperator === '/') {
//   //   let result = 1;}

//   let result = 0;
//   let currentOperator = '+';
//   let negate = false;

//   for (const part of parts) {
//     if (isOperator(part)) {
//       currentOperator = part;
//       negate = false;
//     } else {
//       const value = parseFloat(part || 0);
//       const operand = negate ? -value : value;

//       if (currentOperator === '+') {
//         result += operand;
//       } else if (currentOperator === '-') {
//         result -= operand;
//       } else if (currentOperator === '*') {
//         // result = operand;
//         result *= operand;
//       } else if (currentOperator === '/') {
//         result /= operand;
//         console.log("Resultinf?:", result)
//       }

//       negate = currentOperator === '-' && part === '';
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
        if (operand !== 0) {
          result *= operand;
        } else {
          // Handle division by zero error
          console.log("error double *");
        }
      } else if (currentOperator === '/') {
        if (operand !== 0) {
          result /= operand;
        } else {
          // Handle division by zero error
          console.log("error double /");
        }
      }

      negate = currentOperator === '-' && part === '';
    }
  }

  // Check if result is a number before using toFixed
  if (typeof Number(result) === 'number' && Number(result) % 1 !== 0) {
    result = Number(result).toFixed(4);
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
    // document.getElementById("output").innerText = getResult();
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
  computationInput.value = "";
  resultDisplay.innerText = "";
  outputSpan.textContent = "";
  localStorage.clear();
  sessionStorage.clear();
  location.reload();
  console.log("Reload triggered");
});