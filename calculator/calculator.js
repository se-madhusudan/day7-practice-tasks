let resultP = document.getElementById('result');
let resultStr = '';
let currentOperation = '';
let currentValue = '';
let previousValue = '';

//get the value of button
let clickedBtn = document.querySelector('.gridContainer');
clickedBtn.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        let buttonText = e.target.textContent;

        if (buttonText === 'Clear') {
            clearP();
        } else if (buttonText === '=') {
            calculateResult();
        } else if (['+', '-', '×', '÷'].includes(buttonText)) {
            setOperation(buttonText);
        } else {
            appendNumber(buttonText);
        }
    }
});

const appendNumber = (number) => {
    if (currentOperation) {
        currentValue += number;
    } else {
        previousValue += number;
    }
    resultStr += number;
    resultP.innerText = resultStr;
};

const setOperation = (operation) => {
    if (currentOperation) {
        calculateResult();
    }
    currentOperation = operation;
    resultStr += ` ${operation} `;
    resultP.innerText = resultStr;
};

const calculateResult = () => {
    let a = parseFloat(previousValue);
    let b = parseFloat(currentValue);
    let result;

    switch (currentOperation) {
        case '+':
            result = sum(a, b);
            break;
        case '-':
            result = sub(a, b);
            break;
        case '×':
            result = mul(a, b);
            break;
        case '÷':
            result = div(a, b);
            break;
        default:
            return;
    }

    resultStr = result.toString();
    resultP.innerText = resultStr;
    previousValue = resultStr;
    currentValue = '';
    currentOperation = '';
};

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const clearP = () => {
    resultStr = '';
    resultP.innerText = '';
    currentOperation = '';
    currentValue = '';
    previousValue = '';
};
