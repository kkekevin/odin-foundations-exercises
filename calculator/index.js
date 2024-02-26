const operationDisplay = document.getElementById('screen');
const clearDisplay = document.getElementById('ac');
const clear = document.getElementById('c');
let n = '';
var a, b, result;
let operator = '';
let decimal = false;

function concatenate(number) {
    if (decimal && number == '.')
        return;
    if (!decimal && number == '.') {
        n += number;
        decimal = true;
    } else {
    n += number.toString();
    }
    operationDisplay.textContent = `${n}`;
}

function operate (sign) {
    if (a != null && n !== '') {
        calcul();
        operator = sign;
    } else if (a != null) {
        operator = sign;
    } else {
    operator = sign;
    a = parseFloat(n);
    n = '';
    }
}

function calcul() {
    b = parseFloat(n);
    n = '';
    decimal = false;
    operationDisplay.textContent = `${n}`;
    if (a != null) {
        switch (operator) {
            case '+':
                result = a + b;
                a = result;
                operationDisplay.textContent = `${result}`;
                break;
            case '-':
                result = a - b;
                a = result;
                operationDisplay.textContent = `${result}`;
                break;
            case 'x':
                result = a * b;
                a = result;
                operationDisplay.textContent = `${result}`;
                break;
            case '/':
                result = a / b;
                a = result;
                operationDisplay.textContent = `${result}`;
                break;
            default:
                break;
        }
    } else {
        operationDisplay.textContent = `${b}`;
    }
}

clearDisplay.addEventListener('click', () => {
    n = '';
    a = null;
    b = 0;
    operator = '';
    decimal = false;
    operationDisplay.textContent = '0';
});

clear.addEventListener('click', () => {
    n = n.replace(/.$/, '');
    operationDisplay.textContent = `${n}`;
});