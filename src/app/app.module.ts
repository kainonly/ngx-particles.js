import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxParticlesjsModule} from 'ngx-particlesjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxParticlesjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
