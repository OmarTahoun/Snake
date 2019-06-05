var s = 20;
var cols;
var rows;
var food;
var start, canva,score, score_text, best_score, best_score_text;
var running = false;
var speed = 8;

function preload() {
  soundFormats('mp3', 'ogg');
  lose = loadSound('sounds/dead.mp3');
  win = loadSound('sounds/win.mp3');
  speed_up = loadSound("sounds/speed_up.wav");
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

  best_score = select('.best-score');
  best_score_text = select('h3');
  best_score_text.position(score_text.x, score_text.y+40);

  start = select('.game');
  start.position(score_text.x, score_text.y*2);
  start.mousePressed(()=>{
    running = !running;
  });

  if (!localStorage.best_score)
    localStorage.setItem("best_score", 0);
  frameRate(speed);
  makeFood();
}

function draw() {
  background(120);
  frameRate(speed);
  if (running) {
    if(snake.eat()){
      if(parseInt(score.elt.innerHTML) % 10 == 0){
        speed_up.play();
        speed += 8;
      }
      makeFood();
    }
      snake.grow();
    snake.check_dead();
    snake.move();
    snake.show();
  }
  snake.show();
  fill(255, 0, 40);
  rect(food.x, food.y, s, s);
  best_score.elt.innerHTML = localStorage.best_score;
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
