export class Hill {
  constructor(color, speed, total) {
    this.color = color;
    this.speed = speed;
    this.total = total;
  }
  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.points = [];
    this.gap = Math.ceil(this.stageWidth / (this.total -2));

    for(let i = 0; i<this.total;i++) {
      this.points[i] = {
        x: i * this.gap,
        y: this.getY()
      };
    }
  }

   draw(ctx){
     ctx.fillStyle = this.color;
     ctx.beginPath();

     let cur = this.points[0];
     let prev = cur;

     let dots = [];
     cur.x += this.speed;

     if(cur.x > -this.gap){//x 좌표의 시작점이 화면 밖으로 나오기 전에
       this.points.unshift({//새로운 언덕을 추가
         x: -(this.gap *2),
         y: this.getY()
       });
     }else if(cur.x > this.stageWidth + this.gap){
       this.points.splice(-1);
     }//화면의 일정 영역 이상에서 사라지면 빼줌

     
     ctx.moveTo(cur.x, cur.y);


     let prevCx = cur.x;
     let prevCy = cur.y;

     for(let i = 1; i < this.points.length; i++){
       cur = this.points[i];
       cur.x += this.speed;
       const cx = (prev.x + cur.x) / 2;
       const cy = (prev.y + cur.y) / 2;
       ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);
       //곡선의 좌표를 양의 좌표에 써야 하기 때문에 dots에 저장
       dots.push({
         x1: prevCx,
         y1: prevCy,
         x2: prev.x,
         y2: prev.y,
         x3: cx,
         y3: cy,
       })

       prev = cur;
       prevCx = cx;
       prevCy = cy;
     }

     ctx.lineTo(prev.x, prev.y);
     ctx.lineTo(this.stageWidth, this.stageHeight);
     ctx.lineTo(this.points[0].x, this.stageHeight);
     ctx.fill();

     return dots;
   }
   getY() {
     const min = this.stageHeight / 8;
     const max = this.stageHeight - min;
     return min + Math.random() * max;
   }
}