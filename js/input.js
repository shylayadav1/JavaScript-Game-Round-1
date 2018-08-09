function keyPressed() {
    console.log("keyPressed keyCode = " + keyCode);

    if (keyCode === LEFT_ARROW) {
        game.player1.c += -1;
    } else if (keyCode === RIGHT_ARROW) {
        game.player1.c += 1;
    } else if (keyCode === DOWN_ARROW) {
        game.player1.r += 1;
    } else if (keyCode === 38) {
        game.player1.r += -1;
    }
    pacman(game.player1);
    calculateScore();
}
function moveEnemy() {
    if (Math.random() > 0.5)
        if (game.player1.c > game.player2.c)
            game.player2.c += 1;
        else
            game.player2.c += -1;
  //  else
    //    game.player2.r += 1;
    if (game.player1.r > game.player2.r)
        game.player2.r += 1;
    else
        game.player2.r += -1;

    //game.player2.c += 1; //right
    //else
    //game.player2.r += -1; //down

    addParticle(
        100, 100,
        0.1, 0.1,
        0, 0,
        100,
        1,
    );

    pacman(game.player2);
    calculateScore();
}

function pacman(p) {

    if (p.c < 0) p.c = COLS - 1;
    if (p.r < 0) p.r = ROWS - 1;
    if (p.r == ROWS) p.r = 0;
    if (p.c == COLS) p.c = 0;

    //paint cell
    game.board[p.r][p.c] = p.colorIndex;
}