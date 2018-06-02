import {Component, ElementRef, EventEmitter, Input, AfterContentInit, OnDestroy, Output, ViewChild} from '@angular/core';
import {ParticlesOptions} from './particle/define';
import {NgxParticlesjsService} from './ngx-particlesjs.service';

@Component({
  selector: 'particles',
  template: '<canvas #canvas></canvas>',
})
export class NgxParticlesjsComponent implements AfterContentInit, OnDestroy {
  @Input('config') config: ParticlesOptions = {};
  @ViewChild('canvas') canvas: ElementRef;
  @Output('action') action: EventEmitter<NgxParticlesjsService> = new EventEmitter<NgxParticlesjsService>();

  constructor(private ngxParticlesService: NgxParticlesjsService) {
  }

  ngAfterContentInit() {
    this.ngxParticlesService.init(this.canvas.nativeElement, this.config);
    this.action.emit(this.ngxParticlesService);
  }

  ngOnDestroy() {
    this.ngxParticlesService.destory();
  }

}
