import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinUsHeaderComponent } from './join-us-header.component';

describe('JoinUsHeaderComponent', () => {
  let component: JoinUsHeaderComponent;
  let fixture: ComponentFixture<JoinUsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinUsHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinUsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
