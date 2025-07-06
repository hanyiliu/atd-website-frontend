import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionBoxComponent } from './definition-box.component';

describe('DefinitionBoxComponent', () => {
  let component: DefinitionBoxComponent;
  let fixture: ComponentFixture<DefinitionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefinitionBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefinitionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
