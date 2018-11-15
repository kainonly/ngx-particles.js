import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('stageRef') stageRef: ElementRef;

  ngAfterViewInit() {
    const stage: HTMLCanvasElement = this.stageRef.nativeElement;
    console.log(stage);
  }
}
