
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
        return "Error: Division by zero";
    }
    return a / b;
}

function calculate() {
    // Get the selected option value
    var selectedOption = document.getElementById("operator").value;
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    let result;
    // Perform a function based on the selected option
    switch (selectedOption) {
      case "add":
        // Code for Option 1
        result = add(a, b);
      case "subtract":
        // Code for Option 2
        result = subtract(a, b);
      case "multiply":
        // Code for Option 3
        result = multiply(a, b);
      case "divide":
        // Code for Option 4
        result = divide(a, b);
    }
  }

// Function to display output
function displayOutput(output) {
    console.log("Output:", output);
    calculate();
    return result;
}

// Example usage
displayOutput(add(5, 3)); // Output: 8
displayOutput(subtract(10, 4)); // Output: 6
displayOutput(multiply(2, 6)); // Output: 12
displayOutput(divide(10, 2)); // Output: 5
displayOutput(divide(10, 0)); // Output: Error: Division by zero
