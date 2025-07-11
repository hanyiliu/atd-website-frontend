import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCalenderBoxComponent } from './event-calender-box.component';

describe('EventCalenderBoxComponent', () => {
  let component: EventCalenderBoxComponent;
  let fixture: ComponentFixture<EventCalenderBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCalenderBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCalenderBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
