const display = document.getElementById("display");
const displayValue = document.getElementById("displayValue");

// Append a number or decimal to the display

function appendNumber(num) {
  displayValue.style.display = "flex";
  display.value += num;
  updateDisplayValue();
}

// Append an operator to the display
function appendOperator(operator) {
  const currentValue = display.value;

  //check if display is empty
  if ((currentValue === "") | (currentValue === "-")) {
    display.value += operator;
  }

  if (currentValue === "") {
    return;
  }

  const lastChar = currentValue.slice(-1);

  if (isOperator(lastChar) || lastChar === ".") {
    display.value = currentValue.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
  updateDisplayValue();
}

//helper operator to check if each assigned character is an operator

function isOperator(char) {
  return ["+", "-", "*", "/", "%"].includes(char);
}

// Clear the display
function clearDisplay() {
  display.value = "";
  displayValue.textContent = "0";
}

// Calculate the result

function calculate() {
  try {
    const expression = display.value.replace(/x/g, "*");
    const result = eval(expression);
    display.value = result;
    displayValue.textContent = "";
  } catch (error) {
    display.value = "Error";
    displayValue.textContent = "Error";
    displayValue.textContent = "";
  }
}

function updateDisplayValue() {
  if (display.value === "") {
    displayValue.textContent = "0";
    return;
  }

  try {
    const expression = display.value.replace(/x/g, "*");
    const result = eval(expression);
    displayValue.textContent = result;
  } catch (error) {
    displayValue.textContent = "...";
  }
}