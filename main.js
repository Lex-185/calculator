// Vars
const inputDisplay = document.querySelector('.inputDisplay');
const outputDisplay = document.querySelector('.outputDisplay');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator')

// Get number
let clickedValue = '';
let storedValue = '';
numbers.forEach(number => {
    number.addEventListener('click', (e) => {getNumber(e.target.value)})
});

const getNumber = (value) => {
    clickedValue += value;
    inputDisplay.textContent = clickedValue;
};

// Get operator
let clickedOperator = '';
operators.forEach(operator => {
    operator.addEventListener('click', (e) => getOperator(e.target.value))
});

const getOperator = (operatorValue) => {
    clickedOperator = operatorValue;
    storedValue = clickedValue;
    inputDisplay.textContent = `${storedValue} ${clickedOperator}`
}

// Basic math operators
const add = (x,y) => {return x + y};
const sub = (x,y) => {return x - y};
const multiply = (x,y) => {return x * y};
const divide = (x,y) => {return x / y};
const remainder = (x,y) => {return x % y};

// Operate function: Takes an operator and 2 numbers. Calls function on the 2 numbers
function operate() {
    let x = parseInt(storedValue)
    let y = parseInt(currentValue)

    if (operator === '+') {
        return add(x, y);
    } else if (operator === '-') {
        return sub(x, y);
    } else if (operator === 'x') {
        return multiply(x, y);
    } else if (operator === '÷') {
        return divide(x, y);
    } else if (operator === '%') {
        return remainder(x, y);
    }
}

// All Clear
const allClearBtn = document.getElementById('clear');
const allClear = () => {
    inputDisplay.textContent = '0';
    outputDisplay.textContent = '';
}
allClearBtn.addEventListener('click', allClear)