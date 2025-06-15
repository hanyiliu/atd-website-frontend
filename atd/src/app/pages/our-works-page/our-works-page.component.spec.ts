import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorksPageComponent } from './our-works-page.component';

describe('OurWorksPageComponent', () => {
  let component: OurWorksPageComponent;
  let fixture: ComponentFixture<OurWorksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurWorksPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurWorksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
