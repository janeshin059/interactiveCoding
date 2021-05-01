export class Toy {
  constructor(img){
    this.img = img;
    this.imgWidth = 64;
    this.imgHeight = 64;

    this.toyWidth = 32;
    this.toyHeight = 32;

    this.toyWidthHalf = this.toyWidth / 2;
    //this.speed = Math.random() * 0.5 + 1;

  }

  draw(ctx){
    this.animate(ctx);
  }

  animate(ctx){
   // this.x -= this.speed;

    ctx.save();
    
    ctx.drawImage(
      this.img,
      this.imgWidth,
      0,
      this.imgWidth,
      this.imgHeight,
      // -this.toyWidthHalf,
      // -this.toyHeight + 40,
      // this.toyWidth,
      // this.toyHeight
    );

    ctx.restore();

  }


}