import {AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, ViewChild} from '@angular/core';
import {Particle} from './particle';
import {ParticleArgs} from './common';

@Component({
  selector: 'ngx-particle',
  template: `
    <div id="stage">
      <canvas #stageRef></canvas>
    </div>
  `,
  styles: [`
    #stage {
      height: 100%;
      width: 100%;
      will-change: all;
    }
  `]
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

  @Input() total = 100;
  @Input() default_width: number;
  @Input() default_height: number;
  @Input() args?: ParticleArgs;

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
    if (!this.resizing && (!this.default_height || !this.default_width)) {
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
    if (this.default_width) {
      this.canvas.width = this.width = this.default_width;
    } else {
      this.canvas.width = this.width = clientWidth;
    }
    if (this.default_height) {
      this.canvas.height = this.height = this.default_height;
    } else {
      this.canvas.height = this.height = clientHeight;
    }
  }

  private initParticle() {
    const range = [this.width, this.height];
    for (let i = 0; i < this.total; i++) {
      this.particles[i] = new Particle(
        range,
        (this.args && this.args.speed) ? this.args.speed : 'normal',
        (this.args && this.args.size) ? this.args.size : 1.5
      );
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
