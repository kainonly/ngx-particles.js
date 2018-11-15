import { TestBed } from '@angular/core/testing';

import { NgxParticlesjsService } from './ngx-particlesjs.service';

describe('NgxParticlesjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxParticlesjsService = TestBed.get(NgxParticlesjsService);
    expect(service).toBeTruthy();
  });
});
