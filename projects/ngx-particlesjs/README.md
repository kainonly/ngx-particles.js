# ngx-particles.js

[![npm](https://img.shields.io/npm/v/ngx-particlesjs.svg)](https://www.npmjs.com/package/ngx-particlesjs)
[![npm](https://img.shields.io/npm/dm/ngx-particlesjs.svg)](https://www.npmjs.com/package/ngx-particlesjs)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg)](https://www.typescriptlang.org/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/kainonly/ngx-particles.js/master/LICENSE)

> A lightweight particle backgrounds plugin for Angular

- [Demo](https://particle.kain.net.cn/)
- [v1 Document](https://kainonly.github.io/ngx-particles.js/#/v1)

## Install

```shell
# npm install ngx-particlesjs --save
```

## Usually

used on templates

```html
<ngx-particle [total]="total" [default_height]="300" [default_width]="300" [args]="args"></ngx-particle>
```

Defining components

```typescript
export class AppComponent {
  total = 150;
  args = {
    speed: 'fast',
    size: 1.2
  }
}
```

## @Input Attributes

- `total` particle number, default `150`
- `default_width` default stage width
- `default_height` default stage height 
- `args` (not necessary)
  - `speed` particle motion speed, default `normal`, you can set `fast` `normal` `slow`, can also be customized `[2,2]`, the higher the value, the slower the motion
  - `size` particle size
