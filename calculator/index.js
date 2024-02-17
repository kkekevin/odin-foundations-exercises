const operationDisplay = document.getElementById('operation');
const resultDisplay = document.getElementById('result');
let n = '';
var a, b;
let operator = '';

function concatenate (number) {
    n += number.toString();
    operationDisplay.textContent = `${n}`;
}

function op (sign) {
    operator = sign;
    a = parseInt(n);
    n = '';
}

