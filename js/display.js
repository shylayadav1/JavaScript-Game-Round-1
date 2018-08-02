let gridSize = 40;
let gridMargin = 10;
let gridSpace = 0;
let canvasWidth = COLS * gridSize + 2 * gridMargin;
let canvasHeight = ROWS * gridSize + 2 * gridMargin;

let colors = [
    "rgb(66, 134, 244)",
    "rgb(108, 49, 249)",
    "rgb(249, 49, 113)",
    "orange",
    "rgb(247, 177, 249)"
]
    ;
function translateXY(r, c) {
    let x = c * gridSize + gridMargin;
    let y = r * gridSize + gridMargin;
    return {
        x: x, y: y
    };


}
function drawPlayer(p) {
    stroke("white");
    let w = Math.sin(frameCount / .9) * 4 + 3;
    strokeWeight(w);

    let coord = translateXY(p.r, p.c);
    fill(colors[p.colorIndex]);
    ellipse(coord.x, coord.y, gridSize / 2);
    

}



// for {c:0, r:0} => {x:0, y:0}
//for {c:5, r:1} => {x:200, y:40}
function drawBoard() {
    noStroke();
    // LOOP THROUGH THE BOARD
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {

            let coord = translateXY(r, c);
            let cellValue = game.board[r][c];

            fill(colors[cellValue]);
            ellipse(coord.x, coord.y, gridSize / 2);

        }
    }


}