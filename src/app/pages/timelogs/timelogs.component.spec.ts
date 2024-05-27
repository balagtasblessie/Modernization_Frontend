import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelogsComponent } from './timelogs.component';

describe('TimelogsComponent', () => {
  let component: TimelogsComponent;
  let fixture: ComponentFixture<TimelogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelogsComponent]
    });
    fixture = TestBed.createComponent(TimelogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
