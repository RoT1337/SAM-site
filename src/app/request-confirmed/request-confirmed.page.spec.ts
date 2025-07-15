import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestConfirmedPage } from './request-confirmed.page';

describe('RequestConfirmedPage', () => {
  let component: RequestConfirmedPage;
  let fixture: ComponentFixture<RequestConfirmedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestConfirmedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
