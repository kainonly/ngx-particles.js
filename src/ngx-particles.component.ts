import {Component, ElementRef, Input, ViewChild, AfterContentInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import {ParticlesOptions} from './particle/define';
import {NgxParticlesService} from './ngx-particles.service';

@Component({
  selector: 'particles',
  template: '<canvas #canvas></canvas>',
})
export class NgxParticlesComponent implements AfterContentInit, OnDestroy {
  @Input('config') config: ParticlesOptions = {};
  @ViewChild('canvas') canvas: ElementRef;
  @Output('action') action: EventEmitter<NgxParticlesService> = new EventEmitter<NgxParticlesService>();

  constructor(private ngxParticlesService: NgxParticlesService) {
  }

  ngAfterContentInit() {
    this.ngxParticlesService.init(this.canvas.nativeElement, this.config);
    this.action.emit(this.ngxParticlesService);
  }

  ngOnDestroy() {
    this.ngxParticlesService.destory();
  }
}
