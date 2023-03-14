import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GidhumComponent } from './gidhum.component';

describe('GidhumComponent', () => {
  let component: GidhumComponent;
  let fixture: ComponentFixture<GidhumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GidhumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GidhumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
