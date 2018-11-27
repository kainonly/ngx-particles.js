export class Particle {
  private max_width: number;
  private max_height: number;

  private x: number;
  private y: number;

  private vx: number;
  private vy: number;

  private size: number;
  private color: string;

  constructor(range: number[]) {
    this.max_width = range[0];
    this.max_height = range[1];
    this.initPosition();
    this.initSpeed();
    this.initSize();
    this.initColor();
  }

  private initPosition() {
    this.x = Math.random() * this.max_width;
    this.y = Math.random() * this.max_height;
  }

  private initSpeed() {
    this.vx = Math.random() / 2;
    this.vy = Math.random() / 2;
  }

  private initSize() {
    this.size = (1 + Math.random()) * 1.5;
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
