import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsicologiaComponent } from './gpsicologia.component';

describe('GpsicologiaComponent', () => {
  let component: GpsicologiaComponent;
  let fixture: ComponentFixture<GpsicologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpsicologiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GpsicologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
