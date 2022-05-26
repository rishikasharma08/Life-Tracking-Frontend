import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterTrackComponent } from './water-track.component';

describe('WaterTrackComponent', () => {
  let component: WaterTrackComponent;
  let fixture: ComponentFixture<WaterTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
