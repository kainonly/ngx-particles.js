import { TestBed, inject } from '@angular/core/testing';

import { NgxParticlesjsService } from './ngx-particlesjs.service';

describe('NgxParticlesjsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxParticlesjsService]
    });
  });

  it('should be created', inject([NgxParticlesjsService], (service: NgxParticlesjsService) => {
    expect(service).toBeTruthy();
  }));
});
