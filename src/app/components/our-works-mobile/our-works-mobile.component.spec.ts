import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorksMobileComponent } from './our-works-mobile.component';

describe('OurWorksMobileComponent', () => {
  let component: OurWorksMobileComponent;
  let fixture: ComponentFixture<OurWorksMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurWorksMobileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OurWorksMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
