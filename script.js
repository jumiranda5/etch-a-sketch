// Change square size
var slider = document.getElementById("slider");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    console.log(this.value)

    // clear draw container
    const drawContainer = document.querySelector('#draw-container');
    drawContainer.textContent = '';

    // Add new squares
    createDrawSquares(this.value)
}

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

createDrawSquares();