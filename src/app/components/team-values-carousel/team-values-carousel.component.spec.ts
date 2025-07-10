import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamValuesCarouselComponent } from './team-values-carousel.component';

describe('TeamValuesCarouselComponent', () => {
  let component: TeamValuesCarouselComponent;
  let fixture: ComponentFixture<TeamValuesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamValuesCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamValuesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
