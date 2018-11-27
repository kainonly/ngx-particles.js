import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { NgxParticlesComponent } from './ngx-particles/ngx-particles.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxParticlesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
