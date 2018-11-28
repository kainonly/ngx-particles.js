import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxParticlesModule} from 'ngx-particlesjs';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxParticlesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
