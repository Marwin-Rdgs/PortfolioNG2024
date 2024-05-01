import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProjectComponentComponent } from './all-project-component.component';

describe('AllProjectComponentComponent', () => {
  let component: AllProjectComponentComponent;
  let fixture: ComponentFixture<AllProjectComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllProjectComponentComponent]
    });
    fixture = TestBed.createComponent(AllProjectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
