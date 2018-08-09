function setup() {
    createCanvas(canvasWidth, canvasHeight);
    ellipseMode(RADIUS);
}

function draw() {
    background(51);

    //drawTime();
    
    drawBoard();
    drawPlayer(game.player1);
    drawPlayer(game.player2);
    if(frameCount % 30 == 0 ) moveEnemy();
    drawScore();
    drawParticles();
  
 
}