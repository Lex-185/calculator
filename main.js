let calculatorButtons = [
    {
        name: '7',
        symbol: 7,
        formula: 7,
        type: 'number'
    },
    {
        name: '8',
        symbol: 8,
        formula: 8,
        type: 'number'
    },
    {
        name: '9',
        symbol: 9,
        formula: 9,
        type: 'number'
    },
    {
        name: 'delete',
        symbol: 'DEL',
        formula: false,
        type: 'key'
    },
    {
        name: 'clear',
        symbol: 'AC',
        formula: false,
        type: 'key'
    },
    {
        name: '4',
        symbol: 4,
        formula: 4,
        type: 'number'
    },
    {
        name: '5',
        symbol: 5,
        formula: 5,
        type: 'number'
    },
    {
        name: '6',
        symbol: 6,
        formula: 6,
        type: 'number'
    },
    {
        name: 'multiplication',
        symbol: 'x',
        formula: '*',
        type: 'operator'
    },
    {
        name: 'division',
        symbol: '÷',
        formula: '/',
        type: 'operator'
    },
    {
        name: '1',
        symbol: 1,
        formula: 1,
        type: 'number'
    },
    {
        name: '2',
        symbol: 2,
        formula: 2,
        type: 'number'
    },
    {
        name: '3',
        symbol: 3,
        formula: 3,
        type: 'number'
    },
    {
        name: 'addition',
        symbol: '+',
        formula: '+',
        type: 'operator'
    },
    {
        name: 'subtraction',
        symbol: '-',
        formula: '-',
        type: 'operator'
    },
    {
        name: '0',
        symbol: 0,
        formula: 0,
        type: 'number'
    },
    {
        name: 'decimal',
        symbol: '.',
        formula: '.',
        type: 'number'
    },
    {
        name: 'percent',
        symbol: '%',
        formula: '/100',
        type: 'number'
    },
    {
        name: 'equals',
        symbol: '=',
        formula: 'operate',
        type: 'key'
    },
];

// Vars
const inputDisplayElement = document.querySelector('#inputDisplay');
const resultDisplayElement = document.querySelector('#resultDisplay');
const inputElement = document.querySelector('#calcInput')

// Create Buttons
const createButton = () => {
    const buttonsPerRow = 5;
    let appendedButtons = 0;

    calculatorButtons.forEach(btn => {
        if (appendedButtons % buttonsPerRow == 0) {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'row';
            inputElement.appendChild(rowDiv);
        }
        const row = document.querySelector('.row:last-child');
        row.innerHTML += `<button id="${btn.name}" class="button">${btn.symbol}</button>`;
        appendedButtons++
    })
}

createButton()

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