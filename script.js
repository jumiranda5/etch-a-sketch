// Create 16x16 squares inside draw container
function createDrawSquares(cols=16) {
    const drawContainer = document.querySelector('#draw-container');
    const squares =  cols * cols

    for (let i = 0; i < squares; i++) {
        const square = document.createElement('div');
        const size = 400 / 16;
        square.setAttribute('style', `width: ${size}px; height: ${size}px;`); 
        drawContainer.appendChild(square);

        // Change square background color on mouse click and drag
        let mouseDown = false;
        drawContainer.addEventListener('mousedown', () => mouseDown = true);
        drawContainer.addEventListener('mouseup', () => mouseDown = false);
        square.addEventListener('mouseenter', (e) => {
            if (mouseDown) {
                e.target.style.background = 'black';
            }
        });
        square.addEventListener('click', (e) => e.target.style.background = 'black');
    }
}


createDrawSquares();

