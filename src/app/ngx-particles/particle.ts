import {saveDecimal} from './common';

export class Particle {
  private max_width: number;
  private max_height: number;

  private x: number;
  private y: number;

  private vx: number;
  private vy: number;

  private size: number;
  private color: string;

  constructor(range: number[], speed: 'fast' | 'normal' | 'slow' | number[] = 'normal', size = 1.5) {
    this.max_width = range[0];
    this.max_height = range[1];
    this.initPosition();
    this.initSpeed(speed);
    this.initSize(size);
    this.initColor();
  }

  onRange(range: number[]) {
    this.max_width = range[0];
    this.max_height = range[1];
  }

  private initPosition() {
    this.x = saveDecimal(Math.random() * this.max_width);
    this.y = saveDecimal(Math.random() * this.max_height);
  }

  private initSpeed(speed: 'fast' | 'normal' | 'slow' | number[]) {
    let vi = [];
    if (typeof speed === 'string') {
      switch (speed) {
        case 'fast':
          vi = [1, 1];
          break;
        case 'normal':
          vi = [2, 2];
          break;
        case 'slow':
          vi = [5, 5];
          break;
        default:
          vi = [2, 2];
      }
    } else {
      vi = speed;
    }
    this.vx = saveDecimal(Math.random() / vi[0]);
    this.vy = saveDecimal(Math.random() / vi[1]);
  }

  private initSize(size: number) {
    this.size = (1 + Math.random()) * size;
  }

  private initColor() {
    this.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  update() {
    this.edge();
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

  private edge() {
    if (this.x + this.vx > this.max_width || this.x + this.vx < 0) {
      this.vx = -this.vx;
    }
    if (this.y + this.vy > this.max_height || this.y + this.vy < 0) {
      this.vy = -this.vy;
    }
  }
}
