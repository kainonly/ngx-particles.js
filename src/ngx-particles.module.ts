import {NgModule} from '@angular/core';
import {NgxParticlesComponent} from './ngx-particles.component';
import {NgxParticlesService} from './ngx-particles.service';

@NgModule({
  exports: [NgxParticlesComponent],
  providers: [NgxParticlesService],
  declarations: [NgxParticlesComponent]
})
export class NgxParticlesModule {
}
