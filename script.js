let columns = 16;

// Change square size (each time you drag the slider handle)
const slider = document.getElementById("slider");

slider.oninput = function() {
    columns = this.value;
    clear();
}

// Buttons
const btnClear = document.querySelector('#clear');
const btnErase = document.querySelector('#erase');

btnClear.addEventListener('click', () => clear());

//btnErase.addEventListener('click', () => TODO);


// Create squares inside draw container default = 16x16
function createDrawSquares(cols=16) {
    const drawContainer = document.querySelector('#draw-container');
    const squares =  cols * cols

    for (let i = 0; i < squares; i++) {
        // Add container square
        const square = document.createElement('div');
        const size = 480 / cols;
        square.setAttribute('style', `width: ${size}px; height: ${size}px;`); 
        drawContainer.appendChild(square);

        // Change square background color on mouse click and drag
        let mouseDown = false;
        drawContainer.addEventListener('mousedown', () => mouseDown = true);
        drawContainer.addEventListener('mouseup', () => mouseDown = false);
        drawContainer.addEventListener('mouseleave', () => mouseDown = false);
        square.addEventListener('mouseenter', (e) => {
            if (mouseDown) {
                e.target.style.background = 'black';
            }
        });
        square.addEventListener('click', (e) => e.target.style.background = 'black');
        
    }
}

// Rewrite draw container
function clear() {
    const drawContainer = document.querySelector('#draw-container');
    drawContainer.textContent = '';
    createDrawSquares(columns)
}

createDrawSquares();