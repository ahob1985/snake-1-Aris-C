class Snake {

  constructor() {
    this.body = [];
    this.body[0] = createVector(Floor(scaleWidth / 2),floor(scaledHeight / 2) )
    this.xDirection = 0;
    this.yDirection = 0;
  }

  update() {
    let head = this.body[this.body.length - 1].copy();
    this.body.shitf();
    head.x += this.xDirection
    head.y += this.yDirection
    this.body.push(head)
  }

  endGame() {

  }

  grow() {

  }

  eat(food) {

  }

  show() {
    for(let i = 0; i < this.body.length; i++){
      fill(0)
      noStroke();
      rect(this.body[i].x, this.[i].y, 1, 1);
    }

  }

  setDirection(x, y) {
    this.xDirection = x;
    this.yDirection = y;
  }

}
