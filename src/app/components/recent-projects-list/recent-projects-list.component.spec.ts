import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentProjectsListComponent } from './recent-projects-list.component';

describe('RecentProjectsListComponent', () => {
  let component: RecentProjectsListComponent;
  let fixture: ComponentFixture<RecentProjectsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentProjectsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentProjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
