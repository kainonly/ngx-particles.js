export class Stage {
  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
    const {clientWidth, clientHeight} = canvas.parentElement;
    canvas.width = this.width = clientWidth;
    canvas.height = this.height = clientHeight;
  }

  getSize() {
    return [this.width, this.height];
  }

  drawContext = () => {
    this.ctx.beginPath();
    this.ctx.translate(105, 0);
    this.ctx.arc(100, 75, (1 + Math.random()) * 10, 0, 2 * Math.PI);
    const color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = color;
    this.ctx.fill();
    this.ctx.stroke();
    window.requestAnimationFrame(this.drawContext);
  };

}
