import { WaveGroup } from "./wavegroup.js";

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.waveGroup = new WaveGroup();
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this)); //start animation
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2; //to maintain good quality in retina
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2,2);

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    this.ctx.clearRect(0,0, this.stageWidth, this.stageHeight); //clear canvas
    this.waveGroup.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this)); 
  }
}

window.onload = () => {
  new App();
}