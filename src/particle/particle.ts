import {ParticleArgs} from './define';

export class Particle {
  public element: HTMLCanvasElement;

  private _context: CanvasRenderingContext2D | null;
  x: number;
  y: number;
  color: any;

  private _radius: number;
  private _vx: number;
  private _vy: number;

  constructor(args: ParticleArgs) {
    const {random, floor} = Math;
    const {speed, sizeVariations, color} = args.options;
    this.element = args.element;
    this._context = this.element.getContext('2d');
    this.x = random() * this.element.width;
    this.y = random() * this.element.height;
    this._vx = random() * speed * 2 - speed;
    this._vy = random() * speed * 2 - speed;
    this._radius = random() * random() * sizeVariations;
    this.color = (color instanceof Array) ? color[floor(random() * color.length)] : color;
    this.draw();
  }

  draw() {
    this._context.save();
    this._context.translate(this.x, this.y);
    this._context.moveTo(0, 0);
    this._context.beginPath();
    this._context.arc(0, 0, this._radius, 0, Math.PI * 2, false);
    this._context.fillStyle = this.color;
    this._context.fill();
    this._context.restore();
  }

  updateCoordinates(parent_width: number, parent_height: number) {
    let x = this.x + this._vx;
    let y = this.y + this._vy;
    if (x + this._radius > parent_width) {
      x = this._radius;
    } else if (x - this._radius < 0) {
      x = parent_width - this._radius;
    }
    if (y + this._radius > parent_height) {
      y = this._radius;
    } else if (y - this._radius < 0) {
      y = parent_height - this._radius;
    }
    this.x = x;
    this.y = y;
  }
}
