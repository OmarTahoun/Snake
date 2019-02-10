var s = 20;
var cols;
var rows;
var food;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  cols = floor(width/s);
  rows= floor(height/s);
  frameRate(8);
  makeFood();
}

function draw() {
  background(120);
  if(snake.eat())
    makeFood();
    snake.grow();
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
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(s);
}
