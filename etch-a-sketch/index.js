const container = document.getElementById('container');

for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    for (let j = 0; j < 16; j++) {
        const child = document.createElement('div');
        child.classList.add('etch');
        div.appendChild(child);
    }
}

var etch = document.querySelectorAll('.etch');

etch.forEach(cell => cell.addEventListener('mouseenter', () => {
    cell.setAttribute('style', 'background-color: hsl(240, 12%, 50%);')
}));
