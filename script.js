const container = document.querySelector('#container');
const resizeGrid = document.querySelector('#resizeGrid');
const randColorButton = document.querySelector('#randColorButton');
const grayscaleButton = document.querySelector('#grayscaleButton');
let randRed, randGreen, randBlue, grayShade = 255; 

// initialize grid size
let gridSize = 16;
let gridArea = gridSize ** 2;

// draw initial grid when page loads
drawGrid();

// resize grid when button is clicked
resizeGrid.addEventListener('click', changeGrid);

// change palette to rainbow when button is clicked
randColorButton.addEventListener('click', changePaletteRand);

// change palette to grayscale when button is clicked
grayscaleButton.addEventListener('click', changePaletteGrayscale);

function drawGrid() {
    // clear current grid
    while (container.firstChild) {
        container.removeChild(container.lastChild); // 
    }
    // draw new grid
    for (i = 0; i < gridArea; i++) {
        let gridPixel = document.createElement('div');
        gridPixel.classList='gridPixel';
        container.appendChild(gridPixel);
        gridPixel.addEventListener('mouseenter', function() {
            gridPixel.classList.add('filledPixel');
        });
    }
}

// change color palette to random
function changePaletteRand () {
    // clear current grid
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    };
    // draw new grid
    for (i = 0; i < gridArea; i++) {
        let gridPixel = document.createElement('div');
        gridPixel.classList='gridPixel';
        container.appendChild(gridPixel);
        gridPixel.addEventListener('mouseenter', function toRainbow() {
            randColor();
            gridPixel.style.backgroundColor = "rgb(" + randRed + "," + randGreen + "," + randBlue + ")";
            gridPixel.removeEventListener('mouseenter', toRainbow);
        });  
    };   
}

// change color palette to grayscale
function changePaletteGrayscale () {
    // clear current grid
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    };
    // draw new grid
    for (i = 0; i < gridArea; i++) {
        let gridPixel = document.createElement('div');
        gridPixel.classList='gridPixel';
        container.appendChild(gridPixel);
        gridPixel.addEventListener('mouseenter', function toGrayscale() {
            grayShade -= 26;
            if (grayShade < 0) {
                grayShade = 0;
            }
            gridPixel.style.backgroundColor = "rgb(" + grayShade + "," + grayShade + "," + grayShade + ")";
        });  
    };   
}


function changeGrid() {
    do {
        gridSize = parseInt(prompt("Grid size? (enter 1 to 100)"));
    } while (gridSize > 100 || gridSize < 1);
    gridArea = gridSize ** 2;
    document.documentElement.style.setProperty("--gridSize", gridSize);
    drawGrid();
}



// color randomizer
function randColor() {
    randRed = Math.round(Math.random() * 255);
    randGreen = Math.round(Math.random() * 255);
    randBlue = Math.round(Math.random() * 255);
    document.documentElement.style.setProperty("--randRed", randRed);
    document.documentElement.style.setProperty("--randGreen", randGreen);
    document.documentElement.style.setProperty("--randBlue", randBlue);
}