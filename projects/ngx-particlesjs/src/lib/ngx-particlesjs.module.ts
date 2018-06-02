import {NgModule} from '@angular/core';
import {NgxParticlesjsComponent} from './ngx-particlesjs.component';
import {NgxParticlesjsService} from './ngx-particlesjs.service';

@NgModule({
  declarations: [NgxParticlesjsComponent],
  exports: [NgxParticlesjsComponent],
  providers: [NgxParticlesjsService]
})
export class NgxParticlesjsModule {
}
