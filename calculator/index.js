const operationDisplay = document.getElementById('operation');
const resultDisplay = document.getElementById('result');
let n = '';
var a, b, result;
let operator = '';

function concatenate(number) {
    n += number.toString();
    operationDisplay.textContent = `${n}`;
}

function op(sign) {
    operator = sign;
    a = parseInt(n);
    n = '';
}

function calcul() {
    b = parseInt(n);
    n = '';
    operationDisplay.textContent = `${n}`;
    if (a != null) {
        switch (operator) {
            case '+':
                result = a + b;
                resultDisplay.textContent = `${result}`;
                break;
            case '-':
                result = a - b;
                resultDisplay.textContent = `${result}`;
                break;
            case 'x':
                result = a * b;
                resultDisplay.textContent = `${result}`;
                break;
            case '/':
                result = a / b;
                resultDisplay.textContent = `${result}`;
                break;
            default:
                break;
        }
    } else {
        resultDisplay.textContent = `${b}`;
    }
}