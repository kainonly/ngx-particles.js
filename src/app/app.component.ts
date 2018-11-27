import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Stage} from './stage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('stageRef') stageRef: ElementRef;

  ngAfterViewInit() {
    const stage: Stage = new Stage(this.stageRef.nativeElement);
    stage.particle();
    stage.drawContext();
  }
}
