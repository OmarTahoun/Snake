var s = 20;
var cols;
var rows;
var food;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  cols = floor(width/s);
  rows= floor(height/s);
  frameRate(10);
  makeFood();
}

function draw() {
  background(120);
  snake.move();
  snake.show();

  fill(255, 0, 40);
  rect(food.x, food.y, s, s);
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


function makeFood() {
  food = createVector(random(cols), random(rows));
  food.mult(s);
}
