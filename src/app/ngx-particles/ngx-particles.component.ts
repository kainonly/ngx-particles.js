import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild} from '@angular/core';
import {Particle} from './particle';

@Component({
  selector: 'app-ngx-particles',
  templateUrl: './ngx-particles.component.html',
  styleUrls: ['./ngx-particles.component.css'],
})
export class NgxParticlesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('stageRef') stageRef: ElementRef;

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;
  private particles: Particle[] = [];
  private mainAnimationFrame: any;
  private changeAnimationFrame: any;
  private resizing: any = false;

  ngAfterViewInit() {
    this.canvas = this.stageRef.nativeElement;
    this.ctx = this.canvas.getContext('2d', {alpha: false});
    this.initStage();
    this.initParticle();
    this.drawContext();
  }

  ngOnDestroy() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    window.cancelAnimationFrame(this.mainAnimationFrame);
    window.cancelAnimationFrame(this.changeAnimationFrame);
  }

  @HostListener('window:resize')
  onResize() {
    if (!this.resizing) {
      this.resizing = true;
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(this.stageChange);
      } else {
        setTimeout(this.stageChange, 66);
      }
    }
  }

  private initStage() {
    const {clientWidth, clientHeight} = this.canvas.parentElement;
    this.canvas.width = this.width = clientWidth;
    this.canvas.height = this.height = clientHeight;
  }

  private initParticle() {
    const range = [this.width, this.height];
    for (let i = 0; i < 100; i++) {
      this.particles[i] = new Particle(range);
    }
  }

  private stageChange = () => {
    this.initStage();
    const range = [this.width, this.height];
    for (const x of this.particles) {
      x.onRange(range);
    }
    this.resizing = false;
  };

  private drawContext = () => {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (const x of this.particles) {
      x.draw(this.ctx);
      x.update();
    }
    this.mainAnimationFrame = window.requestAnimationFrame(this.drawContext);
    this.resizing = false;
  };
}
