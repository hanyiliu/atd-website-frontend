import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeOfferComponent } from './what-we-offer.component';

describe('WhatWeOfferComponent', () => {
  let component: WhatWeOfferComponent;
  let fixture: ComponentFixture<WhatWeOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWeOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWeOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
