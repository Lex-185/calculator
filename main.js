// Vars
const calcInputDisplay = document.querySelector('.calcInputDisplay');
const calcOutputDisplay = document.querySelector('.calcOutputDisplay');


const decimal = document.getElementById('decimal');

const calcButtons = document.querySelectorAll('.button');
const calcOperators = document.querySelectorAll('.operator')
let placeholder = '';
let storedValue = ''

calcButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        buttonValue(e.target.textContent);
    })
})

calcOperators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        operatorValue(e.target.textContent);
    })
})

const buttonValue = (number) => {
    if (placeholder.length <= 12) {
        placeholder += number
        calcInputDisplay.textContent = placeholder
    }
}

const operatorValue = (mathKey) => {
    operator = mathKey;
    storedValue = placeholder;
    calcOutputDisplay.textContent = `${storedValue} ${operator}`
    placeholder = '';
}

// Equals
const equals = document.getElementById('equals');
equals.addEventListener('click', operate)

// Basic math operators
let operator = ''
const add = (x,y) => {return x + y};
const sub = (x,y) => {return x - y};
const multiply = (x,y) => {return x * y};
const divide = (x,y) => {return x / y};
const remainder = (x,y) => {return x % y};

// Operate function: Takes an operator and 2 numbers. Calls function on the 2 numbers
function operate() {
    let x = parseInt(storedValue)
    let y = parseInt(placeholder)

    if (operator === '+') {
        console.log(x, y);
        calcInputDisplay.textContent = add(x, y);
    } else if (operator === '-') {
        calcInputDisplay.textContent = sub(x, y);
    } else if (operator === 'x') {
        calcInputDisplay.textContent = multiply(x, y);
    } else if (operator === '÷') {
        calcInputDisplay.textContent = divide(x, y);
    } else if (operator === '%') {
        calcInputDisplay.textContent = remainder(x, y);
    }
    calcOutputDisplay.textContent = ''
    
}

// All Clear
const allClear = document.getElementById('clear');
