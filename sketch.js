function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  frameRate(10);
}

function draw() {
  background(120);
  snake.move();
  snake.show();
}


function keyPressed() {
  if (keyCode === UP_ARROW){
    snake.xSpeed = 0;
    snake.ySpeed = -1;
  }

  if (keyCode === DOWN_ARROW){
    snake.xSpeed = 0;
    snake.ySpeed = 1;
  }

  if (keyCode === RIGHT_ARROW){
    snake.xSpeed = 1;
    snake.ySpeed = 0;
  }

  if (keyCode === LEFT_ARROW){
    snake.xSpeed = -1;
    snake.ySpeed = 0;
  }

}
