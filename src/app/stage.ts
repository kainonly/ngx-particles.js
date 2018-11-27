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
    this.ctx.clearRect(0, 0, this.width, this.height);
    window.requestAnimationFrame(this.drawContext);
  };

}
