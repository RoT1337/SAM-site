import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReliefStatusPage } from './relief-status.page';

describe('ReliefStatusPage', () => {
  let component: ReliefStatusPage;
  let fixture: ComponentFixture<ReliefStatusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReliefStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
