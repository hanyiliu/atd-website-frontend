import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanyiComponent } from './hanyi.component';

describe('HanyiComponent', () => {
  let component: HanyiComponent;
  let fixture: ComponentFixture<HanyiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HanyiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HanyiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
