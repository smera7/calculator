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

// document.querySelectorAll('.digitz').forEach(function (button) {
//   button.addEventListener('click', function (e) {
//     e.preventDefault();
//     const buttonText = button.textContenst;
//     const computationInput = document.getElementById('computation');

//     // Check if the last character is a decimal point
//     const lastChar = computationInput.value.slice(-1);
//     if (buttonText === '.' && lastChar === '.') {
//       return; // Ignore consecutive decimal points
//     }

//     computationInput.value += buttonText;
//   });
// });


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
  document.getElementById("output").innerText = result;
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
        document.getElementById("output").innerText = result;
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
        // setTimeout(function() {
        //   document.getElementById("output").innerText = "";
        // }, 80000); // simulates the clear function i guess
      }, 0);
      
    } else {
      // If it's not an operator, update currentInput
      currentInput += buttonText;
    }
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

//   if (resultDisplay.innerText !== "") {
//     // If there is a dynamic result displayed, update computation input with the result
//     computationInput.value = resultDisplay.innerText;
//     resultDisplay.innerText = ""; // Clear the dynamic result
//   } else {
//     // Otherwise, continue with the regular display logic
//     computationInput.value += buttonText;
//   }
// }

// function display(button) {
//   var computationInput = document.getElementById('computation');
//   var resultDisplay = document.getElementById('output');
//   var buttonText = button.textContent;
//   var result = resultDisplay.innerText; // Get the dynamic result

//   if (result === '=' || result === '+' || result === '-' || result === '*' || result === '/') {
//     computationInput.value = buttonText; // Set computation input with the button text
//   } else {
//     computationInput.value += buttonText; // Append the button text to the existing input
//   }

//   if (result !== "") {
//     // If there is a dynamic result displayed, clear it
//     resultDisplay.innerText = "";
//   }
// }

// function display(button) {
//   var computationInput = document.getElementById('computation');
//   var resultDisplay = document.getElementById('output');
//   var buttonText = button.textContent;
//   var result = resultDisplay.innerText; // Get the dynamic result

//   if (isOperator(buttonText)) {
//     // If the pressed button is an operator, display the current input as is
//     computationInput.value = computationInput.value.trim();
//     computationInput.value += " " + buttonText + " ";
//   } else {
//     // If the pressed button is a digit, update the input accordingly
//     if (result === '=' || result === '+' || result === '-' || result === '*' || result === '/') {
//       computationInput.value = buttonText;
//     } else {
//       computationInput.value += buttonText;
//     }
//   }

//   if (result !== "") {
//     // If there is a dynamic result displayed, clear it
//     resultDisplay.innerText = "";
//   }
// }

// // Function to check if a button represents an operator
// function isOperator(text) {
//   return ['+', '-', '*', '/'].includes(text);
// }


// function display(button) {
//   var computationInput = document.getElementById('computation');
//   var resultDisplay = document.getElementById('output');
//   var buttonText = button.textContent;
//   var result = resultDisplay.innerText; // Get the dynamic result

//   if (isOperator(buttonText)) {
//     // If the pressed button is an operator, update the input accordingly
//     computationInput.value = computationInput.value.trim(); // Remove leading/trailing spaces
//     computationInput.value = buttonText + " ";
//   } else {
//     // If the pressed button is a digit, update the input accordingly
//     if (result === '=' || result === '+' || result === '-' || result === '*' || result === '/') {
//       computationInput.value = buttonText;
//     } else {
//       computationInput.value += buttonText;
//     }
//   }

//   if (result !== "") {
//     // If there is a dynamic result displayed, clear it
//     resultDisplay.innerText = "";
//   }
// }

// // Function to check if a button represents an operator
// function isOperator(text) {
//   return ['+', '-', '*', '/'].includes(text);
// }

function display(button) {
  var computationInput = document.getElementById('computation');
  var resultDisplay = document.getElementById('output');
  var buttonText = button.textContent;
  var result = resultDisplay.innerText; // Get the dynamic result

  if (isOperator(buttonText)) {
    // If the pressed button is an operator, update the input accordingly
    computationInput.value = getResult() + " " + buttonText + " ";
  } else {
    // If the pressed button is a digit, update the input accordingly
    if (result === '=' || result === '+' || result === '-' || result === '*' || result === '/') {
      computationInput.value = buttonText;
    } else {
      computationInput.value += buttonText;
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
  try {
    return eval(expression);
  } catch (error) {
    return ""; // Handle errors gracefully, you can provide a more specific error message if needed
  }
}




// function undisplay(button) {
//   var computationInput = document.getElementById('computation');
//   var result = computationInput.value; // Assuming result is the current value in the computation input

//   if (result === '=' || result === '+' || result === '-' || result === '*' || result === '/') {
//     computationInput.value = result;
//   } else {
//     var buttonText = button.textContent;
//     var updatedValue = computationInput.value.slice(0, -1); // Remove the last character
//     // if its the first number, don't remove it ?
//     number1 = parseFloat(updatedValue);
//     operator = getOperator(updatedValue);
//     number2 = getNumber2(updatedValue, operator);
//     newOutput = calculatemulti(number1, number2, operator);
//     document.getElementById("output").innerText = newOutput;
//     // if its the first number show the first number
//     console.log("updatedvaluepostdelete:", updatedValue);

//     computationInput.value = updatedValue;
//   }
// }

function display(button) {
  var computationInput = document.getElementById('computation');
  var resultDisplay = document.getElementById('output');
  var buttonText = button.textContent;
  var result = resultDisplay.innerText; // Get the dynamic result

  if (isOperator(buttonText)) {
    // If the pressed button is an operator, update the input accordingly
    computationInput.value = getResult() + " " + buttonText + " ";
  } else {
    // If the pressed button is a digit, update the input accordingly
    if (result === '=' || result === '+' || result === '-' || result === '*' || result === '/') {
      computationInput.value = buttonText;
    } else {
      computationInput.value += buttonText;
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
  try {
    return eval(expression);
  } catch (error) {
    return ""; // Handle errors gracefully, you can provide a more specific error message if needed
  }
}

// function undisplay(button) {
//   var computationInput = document.getElementById('computation');
//   var result = computationInput.value.trim(); // Trim leading/trailing spaces

//   if (result === '=' || result === '+' || result === '-' || result === '*' || result === '/') {
//     // If the current value is an operator or equals sign, keep it unchanged
//     computationInput.value = result;
//   } else {
//     var buttonText = button.textContent;

//     // If it's the first number and the only number, don't remove it
//     if (isSingleNumber(result, buttonText)) {
//       computationInput.value = result;
//     } else {
//       var updatedValue = result.slice(0, -1); // Remove the last character

//       number1 = parseFloat(updatedValue);
//       operator = getOperator(updatedValue);
//       number2 = getNumber2(updatedValue, operator);
//       newOutput = calculatemulti(number1, number2, operator);
//       document.getElementById("output").innerText = newOutput;
//       console.log("updatedvaluepostdelete:", updatedValue);
//       computationInput.value = updatedValue;
//     }
//   }
// }

// function undisplay(button) {
//   var computationInput = document.getElementById('computation');
//   var result = computationInput.value.trim(); // Trim leading/trailing spaces

//   if (result === '=' || result === '+' || result === '-' || result === '*' || result === '/') {
//     // If the current value is an operator or equals sign, keep it unchanged
//     computationInput.value = result;
//   } else {
//     var buttonText = button.textContent;

//     // If it's the first number and the only number, don't remove it
//     if (isSingleNumber(result, buttonText)) {
//       computationInput.value = result;
//     } else {
//       var updatedValue = result.slice(0, -1); // Remove the last character

//       if (updatedValue.trim() === '') {
//         // If the trimmed updatedValue is empty, keep it unchanged
//         computationInput.value = result;
//       } else {
//         number1 = parseFloat(updatedValue);
//         operator = getOperator(updatedValue);
//         number2 = getNumber2(updatedValue, operator);
//         newOutput = calculatemulti(number1, number2, operator);
//         document.getElementById("output").innerText = newOutput;
//         console.log("updatedvaluepostdelete:", updatedValue);
//         computationInput.value = updatedValue;
//       }
//     }
//   }
// }


// // Function to check if the expression contains only one number
// function isSingleNumber(expression, buttonText) {
//   return expression === buttonText || expression === '-' + buttonText;
// }

function undisplay(button) {
  var computationInput = document.getElementById('computation');
  var result = computationInput.value.trim(); // Trim leading/trailing spaces

  if (result === '=' || result === '+' || result === '-' || result === '*' || result === '/') {
    // If the current value is an operator or equals sign, keep it unchanged
    computationInput.value = result;
  } else {
    var buttonText = button.textContent;

    // If it's the first number and the only number, don't remove it
    if (isSingleNumber(result, buttonText)) {
      computationInput.value = result;
    } else {
      var updatedValue = result.slice(0, -1); // Remove the last character

      if (updatedValue.trim() === '') {
        // If the trimmed updatedValue is empty, keep it unchanged
        computationInput.value = result;
      } else {
        number1 = parseFloat(updatedValue);
        operator = getOperator(updatedValue);
        number2 = getNumber2(updatedValue, operator);
        newOutput = calculatemulti(number1, number2, operator);
        document.getElementById("output").innerText = newOutput;
        console.log("updatedvaluepostdelete:", updatedValue);
        computationInput.value = updatedValue;
      }
    }
  }
}

// Function to check if the expression contains only one number
// function isSingleNumber(expression, buttonText) {
//   // Check if the expression ends with the buttonText
//   return expression.endsWith(buttonText) || expression.endsWith('-' + buttonText);
// }

function isSingleNumber(expression, buttonText) {
  // Check if the expression ends with the buttonText or an operator
  return expression.endsWith(buttonText) || /[+\-*/]$/.test(expression);
}


// Example usage
document.getElementById('deleteButton').addEventListener('click', function() {
  undisplay();
});

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