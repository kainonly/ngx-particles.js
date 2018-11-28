import {Component, OnInit} from '@angular/core';

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
      border: 1px rgba(0, 0, 0, 0.1) dashed;
      will-change: all;
    }
  `]
})
export class NgxParticlesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
