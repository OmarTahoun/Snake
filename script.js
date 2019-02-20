function Snake (){
  this.body = [];
  this.length = 0;
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;

  this.move = function() {
    this.x = this.x + this.xSpeed * s;
    this.y = this.y + this.ySpeed * s;

    // this.x = constrain(this.x, 0, width-s);
    // this.y = constrain(this.y, 0, height-s);
    if (this.x <= -s)
      this.x = width-s;
    if (this.x >= width)
      this.x = 0;
    if (this.y <= -s)
      this.y = height-s;
    if (this.y >=height)
      this.y = 0;

  }

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.body.length; i++) {
      rect(this.body[i].x, this.body[i].y, s, s);
    }
    rect(this.x, this.y, s, s);
  }

  this.eat = function () {
    var distance = dist(this.x, this.y, food.x, food.y);
    if (distance<1){
      mySound.play();
      this.length +=1;
      score.elt.innerHTML = parseInt(score.elt.innerHTML) +1;
      return true;
    }else{
      return false;
    }
  }

  this.grow = function () {
      for (var i = 0; i < this.body.length-1; i++) {
        this.body[i] = this.body[i+1];
      }
      if (this.length >= 1) {
        this.body[this.length-1] = createVector(this.x, this.y);
      }
  }

  this.check_dead = function () {
    for (var i = 0; i < this.body.length-1; i++) {
      var distance = dist(this.x, this.y, this.body[i].x, this.body[i].y);
      if(distance < 1){
        running = !running;
        this.length = 0;
        this.body = [];
        score.elt.innerHTML = 0;
      }
    }
  }

}
