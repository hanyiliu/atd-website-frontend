import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenRolesListComponent } from './open-roles-list.component';

describe('OpenRolesListComponent', () => {
  let component: OpenRolesListComponent;
  let fixture: ComponentFixture<OpenRolesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenRolesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenRolesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
