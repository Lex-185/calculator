// Vars

// Basic math operators
const add = (x,y) => {return x + y};
const sub = (x,y) => {return x - y};
const multiply = (x,y) => {return x * y};
const divide = (x,y) => {return x / y};
const remainder = (x,y) => {return x % y};

// Operate function: Takes an operator and 2 numbers. Calls function on the 2 numbers
function operate(operator, x, y) {
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