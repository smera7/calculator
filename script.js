
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

function calculate() {
    // Get the selected option value
    var selectedOption = document.getElementById("operator").selectedOptions[0].textContent;
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    console.log(a, b, selectedOption);
    let result;
    // Perform a function based on the selected option
    switch (selectedOption) {
      case "Add":
        // Code for Option 1
        result = add(a, b);
        console.log(result);
        break;
      case "Subtract":
        // Code for Option 2
        result = subtract(a, b);
        break;
      case "Multiply":
        // Code for Option 3
        result = multiply(a, b);
        break;
      case "Divide":
        // Code for Option 4
        result = divide(a, b);
        break;

    }

    var outputElement = document.getElementById("output");
    outputElement.textContent = result;

    if (typeof result === 'string' && result.startsWith('Error:')) {
        // Apply red color for error messages
        outputElement.style.color = 'red';
    } else {
        // Reset color for non-error messages
        outputElement.style.color = '';
    }
    
    outputElement.textContent = result;

  }

// Function to display output
function displayOutput(output) {
    console.log("Output:", output);
    return calculate();
}

var outputElement = document.getElementById("output");
    outputElement.textContent = calculate();

// Example usage
displayOutput(add(5, 3)); // Output: 8
// displayOutput(subtract(10, 4)); // Output: 6
// displayOutput(multiply(2, 6)); // Output: 12
// displayOutput(divide(10, 2)); // Output: 5
// displayOutput(divide(10, 0)); // Output: Error: Division by zero

// second calculator
// button function on click display
function display() {
  }

var number1;
var number2;
var operator;



