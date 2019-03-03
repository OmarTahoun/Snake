var s = 20;
var cols;
var rows;
var food;
var start, canva,score, score_text;
var running = false;


function preload() {
  soundFormats('mp3', 'ogg');
  lose = loadSound('sounds/dead.mp3');
  win = loadSound('sounds/win.mp3');
}

function setup() {
  canva = createCanvas(600, 600);
  canva.position((windowWidth - width) / 1.5, (windowHeight - height) / 2);
  win.setVolume(0.8);
  snake = new Snake();
  cols = floor(width/s);
  rows= floor(height/s);

  score = select('.score');
  score_text  = select('h1');
  score_text.position(250, 200);

  start = select('.game');
  start.position(score_text.x, score_text.y*2);
  start.mousePressed(()=>{
    running = !running;
  });
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
  var x,y;
  x = snake.xSpeed;
  y = snake.ySpeed;

  // Stoping the snake from going left if it's walking right
  if (x == 1) {
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
      return 0;
    }
  }

  // Stoping the snake from going right if it's walking left
  if (x == -1) {
    if (keyCode === UP_ARROW){
      snake.xSpeed = 0;
      snake.ySpeed = -1;
    }

    if (keyCode === DOWN_ARROW){
      snake.xSpeed = 0;
      snake.ySpeed = 1;
    }

    if (keyCode === RIGHT_ARROW){
      return 0;
    }

    if (keyCode === LEFT_ARROW){
      snake.xSpeed = -1;
      snake.ySpeed = 0;
    }
  }


  // Stoping the snake from going down if it's walking up
  if (y == -1) {
    if (keyCode === UP_ARROW){
      snake.xSpeed = 0;
      snake.ySpeed = -1;
    }

    if (keyCode === DOWN_ARROW){
      return 0;
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

  // Stoping the snake from going up if it's walking down
  if (y == 1) {
    if (keyCode === UP_ARROW){
      return 0;
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

}


function makeFood() {
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(s);
}
