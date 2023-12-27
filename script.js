// Function to add two numbers
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0) ? 'Error: Division by zero' : a / b;

var computationInput = document.getElementById('computation');

// document.querySelector('form.userinput').addEventListener('submit', function (e) {
//   e.preventDefault();
//   console.log("firstsubmit", computationInput.value);
// });

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

    // Check if the input value is empty or the current input value starts with a digit
    // if (computationInput.value === '' || /^\d/.test(computationInput.value)) {
    //   // computationInput.value += buttonText;
    //   console.log("Number is the first");
    // } else {
    //   // Handle the case when the number is not the first
    //   console.log("Number is not the first");
    //   tryInput = computationInput.value;
    //   proccesing();
    //   getOperator(tryInput);
    //   result = calculatemulti(number1, number2, operator);

    //   // Display result as it's calculated
    //   document.getElementById("output").innerText = result;
    // }

    //save REGEX /[+\-*/]\d+[+\-*/]/
  if (computationInput.value === '' || /[+\-*/]\d+[+\-*/]/.test(computationInput.value)) {
    // computationInput.value += buttonText;
    console.log("Number is not the first");
    e.preventDefault();
    tryInput = document.getElementById('computation').value;
    proccesing();
    // getOperator(tryInput);
    // result = calculatemulti(number1, number2, operator); // this call to multi gets NaN
    document.getElementById("output").innerText = result;
  } else {
    console.log("Number is the first");
    // Your logic for the case when the number is not the first
  }
  });
});

// document.querySelectorAll('.digitz').forEach(function (button) {
//   button.addEventListener('click', function (e) {
//     e.preventDefault();

//     var buttonText = button.textContent;
//     var computationInput = document.getElementById('computation');

//     if (computationInput.value === '' || /^\d/.test(computationInput.value)) {
//       // If the input is empty or the last character is a digit
//       // computationInput.value += buttonText;
//       console.log("Number is the first");
//     } else {
//       // If the last character is not a digit, handle it as needed
//       console.log("Number is not the first");
//       tryInput = document.getElementById('computation').value;
//       proccesing();
//       getOperator(tryInput);
//       result = calculatemulti(number1, number2, operator);
//       document.getElementById("output").innerText = result; // Display the result
//       resultDisplayed = true;
//     }
//   });
// });


function isOperator(text) {
  // Add your logic to determine if the text is an operator
  return text === '+' || text === '-' || text === '*' || text === '/';
}

// Initialize resultDisplayed flag
var resultDisplayed = false;



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
  // document.getElementById("output").innerText = result;
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
  //display result as its calculated
  document.getElementById("output").innerText = result; // new display value
  //display result as its calculated only if 
  return result;
};

// let operatorPressed = false;

// // ... (button click event listeners)

// button.addEventListener('click', function(e) {
//   // ... (other code)

//   if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
//     operatorPressed = true;
//   } else if (buttonText === '=') {
//     proccesing(); // Perform the calculation
//     operatorPressed = false; // Reset the flag NEW
//   } else {
//     currentInput += buttonText;
//   }
// });

function recursive(tryInput, result, number1) {
  if (!tryInput || tryInput.length === 0) { // changed tryInput to updatedexpression
    // Handle the base case (e.g., return a result or perform some final action)
    console.log("Base case reached. Result:", result);
    return result;
  }

  // if (operatorPressed) {
  //   resultcalcmulti = calculatemulti(number1, number2, operator);
  //   result = resultcalcmulti; // Update the result
  //   operatorPressed = false; // Reset the flag

  //   // Display the result as it's calculated NEW
  //   document.getElementById("output").innerText = result;
  // }
  
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
    console.log("Updated expression:", updatedExpression);
    operator = nextoperator;
    console.log("nextOperator:", operator);
    number1 = parseInt(updatedExpression);
    console.log("number1:", number1);
    number2 = getNumber2(updatedExpression, operator);
    resultcalcmulti = calculatemulti(number1, number2, operator);
    result = resultcalcmulti; //new result

    // console.log("Resultcalcmulti:", result);
    // document.getElementById("output").innerText = resultcalcmulti; SWITCH BACK

    if (['+', '-', '*', '/'].includes(nextoperator)) {
      console.log("Resultcalcmulti:", result);
      document.getElementById("output").innerText = result;
    }
    recursive(updatedExpression, result, number1); // moved
  }
};

currentInput = '';
// document.querySelectorAll('.digitz').forEach(function(button) {
//   button.addEventListener('click', function(e) {
//     e.preventDefault();
//     buttonText = button.textContent;

//     // Check if the button is an operator
//     if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
//       // Check if an operator was already pressed
//       if (operatorPressed) {
//         currentInput = computationInput.value;
//       } else {
//         proccesing(); // Perform the calculation
//         operatorPressed = true;
//       }
//     } else if (buttonText === '=') {
//       proccesing(); // Perform the calculation
//       operatorPressed = false; // Reset the operatorPressed flag
//     } else {
//       currentInput += buttonText;
//       // computationInput.value = currentInput;
//       console.log("Number is the first");
//     }
//   });
// });

// document.querySelectorAll('.digitz').forEach(function(button) {
//   button.addEventListener('click', function(e) {
//     e.preventDefault();
//     buttonText = button.textContent;

//     // Check if the button is an operator
//     if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
//       operatorPressed = true;
//     } else if (buttonText === '=') {
//       proccesing(); // Perform the calculation
//     } else {
//       currentInput += buttonText;
//       // computationInput.value = currentInput; OG
//     }
//   });
// });

document.querySelectorAll('.digitz').forEach(function(button) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    buttonText = button.textContent;

    // Check if the button is an operator
    if (buttonText === "=" || buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
      operatorPressed = true;
      proccesing(); // Perform the calculation
    } else {
      currentInput += buttonText;
      // computationInput.value = currentInput;
    }
  });
});


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
//   var buttonText = button.textContent;
//   var computationInput = document.getElementById('computation');
//   computationInput.value += buttonText;
//   userInput = computationInput.value;
//   if (buttonText === '=' || buttonText == '+' || buttonText == '-' || buttonText == '*' || buttonText == '/') {
//     var buttonText = button.textContent;
//     computationInput.value = '';
//     result = calculatemulti();
//     computationInput.value = result;
//   }}

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


// function display(button) {
//   var buttonText = button.textContent;
//   var computationInput = document.getElementById('computation');
//   computationInput.value += buttonText;
//   userInput = computationInput.value;
//   if (buttonText === '=') {
//     var buttonText = button.textContent;
//     computationInput.value = '';
//     result = calculatemulti();
//     computationInput.value = result;
//   }
// }

// function clearText() {
//   document.getElementById('output').value = " ";
//   document.getElementById('computation').value = "";
// }

const outputSpan = document.getElementById("output");

clearzy.addEventListener("click", () => {
  outputSpan.textContent = "";
  // reset all variables
  localStorage.clear();
  sessionStorage.clear();
  location.reload();
});