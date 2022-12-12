// Create 16x16 squares inside draw container

const drawContainer = document.querySelector('#draw-container');

const squares =  16 * 16
for (let i = 0; i < squares; i++) {
    const square = document.createElement('div');
    drawContainer.appendChild(square)
}