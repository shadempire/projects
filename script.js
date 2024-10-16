// Append value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last character
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
