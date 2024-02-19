const operationDisplay = document.getElementById('screen');
const clearDisplay = document.getElementById('ac');
let n = '';
var a, b, result;
let operator = '';

function concatenate(number) {
    n += number.toString();
    operationDisplay.textContent = `${n}`;
}

function operate (sign) {
    if (a != null) {
        calcul();
        operator = sign;
    } else {
    operator = sign;
    a = parseInt(n);
    n = '';
    }
}

function calcul() {
    b = parseInt(n);
    n = '';
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
    operationDisplay.textContent = '0';
});