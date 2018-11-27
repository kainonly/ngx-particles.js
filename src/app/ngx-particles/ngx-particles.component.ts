import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {Particle} from './particle';

@Component({
  selector: 'app-ngx-particles',
  templateUrl: './ngx-particles.component.html',
  styleUrls: ['./ngx-particles.component.css']
})
export class NgxParticlesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('stageRef') stageRef: ElementRef;

  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;
  private particles: Particle[] = [];
  private animationFrame: any;

  ngAfterViewInit() {
    const canvas: HTMLCanvasElement = this.stageRef.nativeElement;
    this.ctx = canvas.getContext('2d', {alpha: false});
    const {clientWidth, clientHeight} = canvas.parentElement;
    canvas.width = this.width = clientWidth;
    canvas.height = this.height = clientHeight;
    this.initParticle();
    this.drawContext();
  }

  ngOnDestroy() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    window.cancelAnimationFrame(this.animationFrame);
  }

  private initParticle() {
    const range = [this.width, this.height];
    for (let i = 0; i < 100; i++) {
      this.particles[i] = new Particle(range);
    }
  }

  private drawContext = () => {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (const x of this.particles) {
      x.draw(this.ctx);
      x.update();
    }
    this.animationFrame = window.requestAnimationFrame(this.drawContext);
  };
}
