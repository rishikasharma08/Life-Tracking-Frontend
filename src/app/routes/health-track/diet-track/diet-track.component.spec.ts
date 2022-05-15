import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietTrackComponent } from './diet-track.component';

describe('DietTrackComponent', () => {
  let component: DietTrackComponent;
  let fixture: ComponentFixture<DietTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
