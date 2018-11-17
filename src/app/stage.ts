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

  drawContext() {
    this.ctx.beginPath();
    this.ctx.arc(100, 75, 50, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = 'green';
    this.ctx.fill();
    this.ctx.stroke();
  }

}
