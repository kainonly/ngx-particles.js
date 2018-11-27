export class Stage {
  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;

  private x = 0;
  private y = 0;
  private vx = 0;
  private vy = 0;
  private size = 0;
  private color: string;

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
    const {clientWidth, clientHeight} = canvas.parentElement;
    canvas.width = this.width = clientWidth;
    canvas.height = this.height = clientHeight;
    this.x = this.width * Math.random();
    this.y = this.width * Math.random();
    this.size = (1 + Math.random()) * 1.5;
    this.vx = Math.random() / 2;
    this.vy = Math.random() / 2;
    this.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  }

  getSize() {
    return [this.width, this.height];
  }

  particle() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.color;
    this.ctx.strokeStyle = this.color;
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();
  }

  drawContext = () => {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.particle();
    if (this.x + this.vx > this.width || this.x + this.vx < 0) {
      this.vx = -this.vx;
    }
    if (this.y + this.vy > this.height || this.y + this.vy < 0) {
      this.vy = -this.vy;
    }
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    window.requestAnimationFrame(this.drawContext);
  };

}
