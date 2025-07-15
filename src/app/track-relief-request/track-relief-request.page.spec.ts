import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackReliefRequestPage } from './track-relief-request.page';

describe('TrackReliefRequestPage', () => {
  let component: TrackReliefRequestPage;
  let fixture: ComponentFixture<TrackReliefRequestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackReliefRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
