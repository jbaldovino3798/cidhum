import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpbxComponent } from './gpbx.component';

describe('GpbxComponent', () => {
  let component: GpbxComponent;
  let fixture: ComponentFixture<GpbxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpbxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GpbxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
