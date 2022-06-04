import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTrackComponent } from './exercise-track.component';

describe('ExerciseTrackComponent', () => {
  let component: ExerciseTrackComponent;
  let fixture: ComponentFixture<ExerciseTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
