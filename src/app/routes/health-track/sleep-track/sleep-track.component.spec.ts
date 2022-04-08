import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepTrackComponent } from './sleep-track.component';

describe('SleepTrackComponent', () => {
  let component: SleepTrackComponent;
  let fixture: ComponentFixture<SleepTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleepTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
