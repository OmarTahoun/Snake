var s = 20;
var cols;
var rows;
var food;
var start, canva,score;
var running = false;


function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('win1.mp3');
}

function setup() {
  canva = createCanvas(600, 600);
  canva.position((windowWidth - width) / 2, (windowHeight - height) / 2);
  mySound.setVolume(0.2);
  snake = new Snake();
  cols = floor(width/s);
  rows= floor(height/s);
  start = select('.game');
  start.mousePressed(()=>{
    running = !running;
  });
  score = select('.score');
  frameRate(8);
  makeFood();
}

function draw() {
  background(120);
  if (running) {
    if(snake.eat())
      makeFood();
      snake.grow();
    snake.check_dead();
    snake.move();
    snake.show();
  }
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
