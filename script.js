'use strict';

let columns = 16;
let eraseSelected = false;
let selectedColor = "#000000"

createDrawSquares();

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
btnErase.addEventListener('click', () => erase());


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

        setSquareColorChange(square, selectedColor);        
    }
}

// Rewrite draw container
function clear() {
    const drawContainer = document.querySelector('#draw-container');
    drawContainer.textContent = '';
    createDrawSquares(columns)
}

// Change squares backgrounds back to white
function erase() {

    const squareList = document.querySelectorAll("#draw-container > div");

    if (eraseSelected) {
        eraseSelected = false;
        btnErase.style.background = "#e8e8e8";
        for (let i = 0; i < squareList.length; i++) {
            setSquareColorChange(squareList[i], selectedColor);
        }
    }
    else {
        eraseSelected = true;
        btnErase.style.background = "#f1e776";
        for (let i = 0; i < squareList.length; i++) {
            setSquareColorChange(squareList[i], "#FFFFFF");
        }
    }

}

// Set square to change background color on mouse click and drag
function setSquareColorChange(square, color) {

    const drawContainer = document.querySelector('#draw-container');

    let mouseDown = false;
    drawContainer.addEventListener('mousedown', () => mouseDown = true);
    drawContainer.addEventListener('mouseup', () => mouseDown = false);
    drawContainer.addEventListener('mouseleave', () => mouseDown = false);
    square.addEventListener('mouseenter', (e) => {
        if (mouseDown) {
            e.target.style.background = color;
        }
    });
    square.addEventListener('click', (e) => e.target.style.background = color);

}