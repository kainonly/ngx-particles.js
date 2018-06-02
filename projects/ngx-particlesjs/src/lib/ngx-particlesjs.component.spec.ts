import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxParticlesjsComponent } from './ngx-particlesjs.component';

describe('NgxParticlesjsComponent', () => {
  let component: NgxParticlesjsComponent;
  let fixture: ComponentFixture<NgxParticlesjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxParticlesjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxParticlesjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
