const operationDisplay = document.getElementById('operation');
const resultDisplay = document.getElementById('result');
let n = '';

function concatenate (number) {
    n += number.toString();
    operationDisplay.textContent = `${n}`;
}