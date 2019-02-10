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

    this.x = constrain(this.x, 0, width-s);
    this.y = constrain(this.y, 0, height-s);
  }

  this.show = function() {
    noStroke();
    fill(255);
    rect(this.x, this.y, s, s);
  }

}
