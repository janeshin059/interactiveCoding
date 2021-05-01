import { Wave } from "./wave.js";

export class WaveGroup {
  constructor() {
    this.totalWaves = 2;
    this.totalPoints = 8;
    this.color = ['rgba(212,241,249,0.6)','rgba(207,244,254,0.6)'];
    this.waves = [];

    for(let i = 0; i < this.totalWaves;i++){
      const wave = new Wave(i,this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }
  
  resize(stageWidth, stageHeight){
    for(let i = 0; i < this.totalWaves; i++){
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx) {
    for(let i = 0; i < this.totalWaves; i++){
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}