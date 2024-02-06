const container = document.getElementById('container');
const buttonGrid = document.getElementById('createGrid');

for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.classList.add('etch1');
    container.appendChild(div);
    for (let j = 0; j < 16; j++) {
        const child = document.createElement('div');
        child.classList.add('etch');
        div.appendChild(child);
    }
}

var etch = document.querySelectorAll('.etch');
var parentEtch = document.querySelectorAll('.etch1');

etch.forEach(cell => cell.addEventListener('mouseenter', () => {
    cell.setAttribute('style', 'background-color: hsl(240, 12%, 50%);')
}));

buttonGrid.addEventListener('click', () => {
    let nGrid = parseInt(prompt("how many grids??"));
    parentEtch.forEach(cell => cell.remove());

    createGrid(nGrid);
    etch = document.querySelectorAll('.etch');
    parentEtch = document.querySelectorAll('.etch1');
});

function createGrid(nGrid) {
    for (let i = 0; i < nGrid; i++) {
        const div = document.createElement('div');
        div.classList.add('etch1');
        container.appendChild(div);
        for (let j = 0; j < nGrid; j++) {
            const child = document.createElement('div');
            child.classList.add('etch');
            div.appendChild(child);
        }
    }
}