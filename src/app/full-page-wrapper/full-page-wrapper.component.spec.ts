import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPageWrapperComponent } from './full-page-wrapper.component';

describe('FullPageWrapperComponent', () => {
  let component: FullPageWrapperComponent;
  let fixture: ComponentFixture<FullPageWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullPageWrapperComponent]
    });
    fixture = TestBed.createComponent(FullPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
