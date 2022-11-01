// Vars
const newNumber = document.querySelector('.newNumber');
const storedNumber = document.querySelector('.storedNumber');

const equals = document.getElementById('equals');
const decimal = document.getElementById('decimal');
const allClear = document.getElementById('clear');

const calcDigits = document.querySelectorAll('.button');
const calcOperator = document.querySelectorAll('.operator')

// Basic math operators
const add = (x,y) => {return x + y};
const sub = (x,y) => {return x - y};
const multiply = (x,y) => {return x * y};
const divide = (x,y) => {return x / y};
const remainder = (x,y) => {return x % y};

// Operate function: Takes an operator and 2 numbers. Calls function on the 2 numbers
function operate(operator, x, y) {
    if (operator === '+') {
        return add(x,y);
    } else if (operator === '-') {
        return sub(x,y);
    } else if (operator === '*') {
        return multiply(x,y);
    } else if (operator === '/') {
        return divide(x,y);
    } else if (operator === '%') {
        return remainder(x,y);
    }
}