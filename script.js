'use strict';

let columns = 16;
let eraseSelected = false;
let selectedColor = "#000000";


// Draw container
const drawContainer = document.querySelector('#draw-container');
let mouseDown = false;
drawContainer.addEventListener('mousedown', () => mouseDown = true);
drawContainer.addEventListener('mouseup', () => mouseDown = false);
drawContainer.addEventListener('mouseleave', () => mouseDown = false);


// Init draw container creating columns and rows
createDrawSquares();


// Change square size (each time you drag the slider handle)
const slider = document.getElementById("slider");
slider.onchange = (e) => {
    columns = e.target.value;
    clear();
}


// Color input
const colorPicker = document.querySelector('#color-picker');
colorPicker.addEventListener("input", (e) => {
    selectedColor = e.target.value;
    changeColor(selectedColor);
});


// Buttons
const btnClear = document.querySelector('#clear');
const btnErase = document.querySelector('#erase');
btnClear.addEventListener('click', () => clear());
btnErase.addEventListener('click', () => erase());


// Create squares inside draw container default = 16x16
function createDrawSquares(cols=16) {
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
    drawContainer.textContent = '';
    console.log(columns)
    createDrawSquares(columns)
}


// Change squares backgrounds back to white
function erase() {

    if (eraseSelected) {
        eraseSelected = false;
        btnErase.style.background = "#e8e8e8";
        changeColor(selectedColor);
    }
    else {
        eraseSelected = true;
        btnErase.style.background = "#f1e776";
        changeColor("#FFFFFF");
    }

}


// Set square to change background color on mouse click and drag
function setSquareColorChange(square, color) {

    square.addEventListener('mouseenter', (e) => {
        if (mouseDown) {
            e.target.style.background = color;
        }
    });
    square.addEventListener('click', (e) => e.target.style.background = color);

    // Prevent mouse down events on square div => it conflicts with the parent div events
    square.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.target.style.background = color;
    });

}


function changeColor(color) {
    const squareList = document.querySelectorAll("#draw-container > div");
    for (let i = 0; i < squareList.length; i++) {
        setSquareColorChange(squareList[i], color);
    }
}