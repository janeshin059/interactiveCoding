export class Point {
  constructor(index, x, y) { //현재 point가 볓 번째 point인지 정의해줌
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.06;
    this.cur = index;
    this.max = (Math.random())* 150 + 100;
  }

  update(){
    //moves point, up and down
    this.cur += this.speed;
    this.y = this.fixedY + (Math.sin(this.cur) * this.max); //sin wave
  }

}