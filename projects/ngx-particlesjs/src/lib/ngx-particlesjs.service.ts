import {Injectable} from '@angular/core';
import {ParticlesOptions} from './particle/define';
import {Particle} from './particle/particle';

@Injectable()
export class NgxParticlesjsService {
  element: HTMLCanvasElement;
  private _context: CanvasRenderingContext2D | null;
  private _options: ParticlesOptions = {
    maxParticles: 100,
    sizeVariations: 3,
    speed: 0.5,
    color: '#000000',
    minDistance: 120,
    connectParticles: false,
  };

  private _storage: Particle[] | null;
  private _listener: EventListener | EventListenerObject;
  private _animation: number;
  private _delay: any;

  private static hex2rgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  private static offsetParentSize(element: HTMLCanvasElement): { width: number, height: number } {
    return {
      width: element.offsetParent.clientWidth,
      height: (element.offsetParent.nodeName === 'BODY') ? innerHeight : element.offsetParent.clientHeight
    };
  }

  static particleCompareFunc(p1: Particle, p2: Particle) {
    if (p1.x < p2.x) {
      return -1;
    } else if (p1.x > p2.x) {
      return 1;
    } else if (p1.y < p2.y) {
      return -1;
    } else if (p1.y > p2.y) {
      return 1;
    }
    return 0;
  }

  init(element: HTMLCanvasElement, args: ParticlesOptions) {
    this.element = element;
    this._initOptions(args);
    this._animate = this._animate.bind(this);
    this._initializeCanvas();
    this._initializeEvents();
    this._initializeStorage();
    this._animate();
  }

  destory() {
    this._storage = [];
    this.element.remove();
    removeEventListener('resize', this._listener, false);
    clearTimeout(this._animation);
    cancelAnimationFrame(this._animation);
  }

  resumeAnimation() {
    if (!this._animation) {
      this._animate();
    }
  }

  pauseAnimation() {
    if (!this._animation) {
      return;
    }
    cancelAnimationFrame(this._animation);
    this._animation = null;
  }

  private _initOptions(args: ParticlesOptions) {
    if (args.maxParticles) {
      this._options.maxParticles = args.maxParticles;
    }
    if (args.sizeVariations) {
      this._options.sizeVariations = args.sizeVariations;
    }
    if (args.speed) {
      this._options.speed = args.speed;
    }
    if (args.color) {
      this._options.color = args.color;
    }
    if (args.minDistance) {
      this._options.minDistance = args.minDistance;
    }
    if (args.connectParticles) {
      this._options.connectParticles = args.connectParticles;
    }
  }

  private _initializeCanvas() {
    if (!this.element) {
      return;
    }
    this._context = this.element.getContext('2d');
    const {width, height} = NgxParticlesjsService.offsetParentSize(this.element);
    this.element.width = width;
    this.element.height = height;
    this.element.style.width = '100%';
    this.element.style.height = '100%';
  }

  private _initializeEvents() {
    this._listener = (() => {
      this._resize();
    });
    addEventListener('resize', this._listener, false);
  }

  private _initializeStorage() {
    this._storage = [];
    for (let i = this._options.maxParticles; i--;) {
      this._storage.push(new Particle({
        element: this.element,
        options: {
          speed: this._options.speed,
          sizeVariations: this._options.sizeVariations,
          color: this._options.color
        }
      }));
    }
  }

  private _refresh() {
    this._initializeStorage();
    this._draw();
  }

  private _resize() {
    const {width, height} = NgxParticlesjsService.offsetParentSize(this.element);
    this.element.width = width;
    this.element.height = height;
    if (this._delay) {
      clearTimeout(this._delay);
    }
    this._delay = setTimeout(() => {
      this._refresh();
    }, 50);
  }

  private _animate() {
    this._draw();
    this._animation = requestAnimationFrame(this._animate);
  }

  private _draw() {
    this._context.clearRect(0, 0, this.element.width, this.element.height);
    this._context.beginPath();
    for (const particle of this._storage) {
      particle.draw();
      particle.updateCoordinates(this.element.width, this.element.height);
    }

    if (this._options.connectParticles) {
      this._storage.sort(NgxParticlesjsService.particleCompareFunc);
      this._updateEdges();
    }
  }

  private _updateEdges() {
    const {sqrt, abs} = Math;
    const len = this._storage.length;
    for (let i = 0; i < len; i++) {
      const p1 = this._storage[i];
      for (let j = i + 1; j < len; j++) {
        const p2 = this._storage[j];
        const r = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = sqrt(r * r + dy * dy);
        if (abs(r) > this._options.minDistance) {
          break;
        }
        if (distance <= this._options.minDistance) {
          this._drawEdge(p1, p2, (1.2 - distance / this._options.minDistance));
        }
      }
    }
  }

  private _drawEdge(p1: Particle, p2: Particle, opacity: number) {
    const gradient = this._context.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
    const color1 = NgxParticlesjsService.hex2rgb(p1.color);
    const color2 = NgxParticlesjsService.hex2rgb(p2.color);
    gradient.addColorStop(0, 'rgba(' + color1.r + ',' + color1.g + ',' + color1.b + ',' + opacity + ')');
    gradient.addColorStop(1, 'rgba(' + color2.r + ',' + color2.g + ',' + color2.b + ',' + opacity + ')');
    this._context.beginPath();
    this._context.strokeStyle = gradient;
    this._context.moveTo(p1.x, p1.y);
    this._context.lineTo(p2.x, p2.y);
    this._context.stroke();
    this._context.fill();
    this._context.closePath();
  }
}
