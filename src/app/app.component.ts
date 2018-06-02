import {Component, AfterContentInit} from '@angular/core';
import {NgxParticlesjsService} from "ngx-particlesjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterContentInit {
  config = {
    color: ['#DA0463', '#404B69', '#DBEDF3'],
    connectParticles: true,
  };

  service: NgxParticlesjsService;

  action(event) {
    this.service = event;
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.service.destory();
    }, 10000);
  }
}
