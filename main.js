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
        name: 'answer',
        symbol: 'Ans',
        formula: false,
        type: 'key'
    },
    {
        name: 'percent',
        symbol: '%',
        formula: '%',
        type: 'number'
    },
    {
        name: 'equals',
        symbol: '=',
        formula: false,
        type: 'operate'
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

// Event listeners
inputElement.addEventListener('click', (e) => {
    const selectBtn = e.target;
    calculatorButtons.forEach(btn => {
        if (btn.name == selectBtn.id) {
            operate(btn);
        }
    })
})

// Keydown event
window.addEventListener('keydown', (e) => {
   keyPress(e)
})

// keypress 
const keyPress = (e) => {
    if (e.key === 'Enter') {
        validateOperators()
    }

    if (e.key === 'Backspace') {
        deleteDataValues()
        updateInput(calcData.operation)
    }

    if (e.key >= 0 && e.key <= 9) {
        inputData(e.key)
        updateInput(calcData.operation)
    } 

    if (e.key === '+' || e.key === '-') {
        inputData(e.key)
        updateInput(calcData.operation)
    }

    if (e.key === '*') {
        inputData(e.key)
        updateInput(calcData.operation)
    } 

    if (e.key === '/') {
        inputData(e.key)
        updateInput(calcData.operation)
        
    }

    if (e.key === '%') {
        inputData(e.key)
        updateInput(calcData.operation)
    }
}

// Basic math operators
let result = ''

const add = (...num) => {
    result = num.reduce((x, y) => parseFloat(x) + parseFloat(y))
    return result
};

const sub = (...num) => {
    result = num.reduce((x, y) => parseFloat(x) -parseFloat(y))
    return result
};

const multiply = (...num) => {
    result = num.reduce((x, y) => parseFloat(x) * parseInt(y))
    return result
};

const divide = (...num) => {
    result = num.reduce((x,y) => parseFloat(x) /parseFloat(y))
    return result
};

const remainder = (...num) => {
    result = num.reduce((x,y) => parseFloat(x) %parseFloat(y))
    return result
};

// Calculate function
const calculate = (operator, ...num) => {
    if (operator === '+') {
        return add(...num)
    } 
    
    else if (operator === '-') {
        return sub(...num)
    }

    else if (operator === '*') {
        return multiply(...num)
    }
    
    else if (operator === '/') {
        return divide(...num)
    } 

    else if (operator === '%') {
        return remainder(...num)
    }
}

// Calculator data
let calcData = {
    operation : [],
    result : []
}

// Store Answer
let ansData = {
    storage : []
} 

// Operate function 
const operate = (btn) => {
    if (btn.type === 'operator') {
        calcData.operation.push(btn.symbol);
        calcData.result.push(btn.formula);
    } 
    
    else if (btn.type === 'number') {
        calcData.operation.push(btn.symbol);
        calcData.result.push(btn.formula);
    } 
    
    else if (btn.type === 'key') {
        if (btn.name === 'clear') {
            resetData()
            resetStorage()
            updateResult('')
        }
        if (btn.name === 'delete') {
            deleteDataValues()
        }

        if (btn.name === 'answer') {
           inputData(ansData.storage)
           resultDisplayElement.innerHTML = ''
        }
    } 
    
    else if (btn.type === 'operate') {
        validateOperators()
    }
    updateInput(calcData.operation.join(''))
}

// Validate operators
const validateOperators = () => {
    const updateData = () => {
        inputData(calculateResult)
    }

    let joinResult = calcData.result.join('');
    let calculateResult = '';

    if (joinResult.includes('+')) {
        let newResult = joinResult.split('+');
        let calculateResult = calculate('+', ...newResult);
        let formattedResult = formatResult(calculateResult)

        ansData.storage.push(calculateResult)
        
        updateData()
        resetData()
        updateResult(formattedResult)
        return
    } 

    else if (joinResult.includes('-')) {
        let newResult = joinResult.split('-');
        let calculateResult = calculate('-', ...newResult);
        let formattedResult = formatResult(calculateResult)

        ansData.storage.push(calculateResult)

        updateData()
        resetData()
        updateResult(formattedResult)
        return
    }

    else if (joinResult.includes('*')) {
        let newResult = joinResult.split('*');
        let calculateResult = calculate('*', ...newResult);
        let formattedResult = formatResult(calculateResult)

        ansData.storage.push(calculateResult)

        updateData()
        resetData()
        updateResult(formattedResult)
        return
    } 

    else if (joinResult.includes('/')) {
        let newResult = joinResult.split('/');
        let calculateResult = calculate('/', ...newResult);
        let formattedResult = formatResult(calculateResult)

        ansData.storage.push(calculateResult)

        updateData()
        resetData()
        updateResult(formattedResult)
        return
    }

    else if (joinResult.includes('%')) {
        let newResult = joinResult.split('%');
        let calculateResult = calculate('%', ...newResult);
        let formattedResult = formatResult(calculateResult)

        ansData.storage.push(calculateResult)

        updateData()
        resetData()
        updateResult(formattedResult)
        return
    }
    
}

// Delete values
const deleteDataValues = () => {
    calcData.operation.pop();
    calcData.result.pop();
}

// Push input to data 
const inputData = (input) => {
    calcData.operation.push(input)
    calcData.result.push(input)
}

// Reset calculator data
const resetData = () => {
    calcData.operation = [];
    calcData.result = [];
}

const resetStorage = () => {ansData.storage = []}

// Update output display element
const updateResult = (result) => {resultDisplayElement.innerHTML = result}

// Update input display element
const updateInput = (input) => {inputDisplayElement.innerHTML = input}

// Format result 
const formatResult = (calculateResult) => {
    const maxLength = 8;
    const outputLength = 4

    if (resultLength(calculateResult) > maxLength) {
        if (isFloat(calculateResult)) {
            const resultInt = parseInt(calculateResult);
            const resultIntLength = resultLength(resultInt)

            if (resultIntLength > maxLength) {
                return calculateResult.toPrecision(outputLength)
            }

            else {
                const decimalLength = maxLength - resultIntLength
                const simplifiedLength = calculateResult.toFixed(decimalLength)
                return `${simplifiedLength}...`
            }
        } 
        
        else {
            return calculateResult.toPrecision(outputLength)
        }
    }

    else {
        return calculateResult
    }
}

// Float/Int
const isFloat = (number) => {return number % 1 !=0;}

// result length
const resultLength = (number) => {return number.toString().length;}