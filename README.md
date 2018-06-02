# ngx-particles.js
[![npm](https://img.shields.io/npm/v/ngx-particlesjs.svg)](https://www.npmjs.com/package/ngx-particlesjs)
[![npm](https://img.shields.io/npm/dm/ngx-particlesjs.svg)](https://www.npmjs.com/package/ngx-particlesjs)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/kainonly/ngx-particles.js/master/LICENSE)

A lightweight particle backgrounds plugin for Angular

## Origin particles.js

- URL `https://github.com/marcbruederlin/particles.js`
- Author `marcbruederlin`

[<img src="http://i.giphy.com/CPEar2kArhFny.gif"/>](https://marcbruederlin.github.io/particles.js/)

## Installation
- Install with npm: `npm install ngx-particlesjs --save`

## Usage

Import NgxParticlesModule

``` typescript
import {NgxParticlesModule} from 'ngx-particles.js';

@NgModule({
  imports: [
    ...
    NgxParticlesModule
    ...
  ],
})
export class AppModule {

}
```

Add particles component

``` html
<particles [config]="config" (action)="action($event)"></particles>
```

## Options
Option | Type | Default | Description
------ | ------------- | ------------- | -----------
`selector` | string | - | *Required:* The CSS selector of your canvas element
`maxParticles` | integer | `100` | *Optional:* Maximum amount of particles
`sizeVariations` | integer | `3` | *Optional:* Amount of size variations
`speed` | integer | `0.5` | *Optional:* Movement speed of the particles
`color` | string or string[] | `#000000` | *Optional:* Color(s) of the particles and connecting lines
`minDistance` | integer | `120` | *Optional:* Distance in `px` for connecting lines
`connectParticles` | boolean | `false` | *Optional:* `true`/`false` if connecting lines should be drawn or not

``` typescript
export class AppComponent {
    ...
  config = {
    color: ['#DA0463', '#404B69', '#DBEDF3'],
    connectParticles: true,
  };
    ...
}
```

## Methods
Method | Description
------ | -----------
`pauseAnimation` | Pauses/stops the particle animation
`resumeAnimation` | Continues the particle animation
`destroy` | Destroys the plugin

``` typescript
// destory
export class AppComponent implements AfterContentInit {
  service: NgxParticlesService;

  action(event) {
    this.service = event;
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.service.destory();
    }, 2000);
  }
}
```