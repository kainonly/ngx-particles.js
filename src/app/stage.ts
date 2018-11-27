export class Stage {
  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;

  private x = 0;
  private y = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
    const {clientWidth, clientHeight} = canvas.parentElement;
    canvas.width = this.width = clientWidth;
    canvas.height = this.height = clientHeight;
  }

  getSize() {
    return [this.width, this.height];
  }

  particle() {
    this.x = this.width * Math.random();
    this.y = this.height * Math.random();
    this.ctx.translate(this.x, this.y);
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, (1 + Math.random() * 6), 0, 2 * Math.PI);
    const color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = color;
    this.ctx.fill();
    this.ctx.stroke();
  }

  drawContext = () => {
    window.requestAnimationFrame(this.drawContext);
  };

}
