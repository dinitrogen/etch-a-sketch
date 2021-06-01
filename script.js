const container = document.querySelector('#container');
const resizeGrid = document.querySelector('#resizeGrid');


// initialize grid size
let gridSize = 16;
let gridArea = gridSize ** 2;

// draw initial grid when page loads
drawGrid();

// resize grid when button is clicked
resizeGrid.addEventListener('click', changeGrid);



function drawGrid() {
    // clear current grid
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    // draw new grid
    for (i = 0; i < gridArea; i++) {
        let gridPixel = document.createElement('div');
        gridPixel.classList='gridPixel';
        container.appendChild(gridPixel);
        gridPixel.addEventListener('mouseenter', function() {
            gridPixel.classList.add('filledPixel');
        })
    }
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
    
}