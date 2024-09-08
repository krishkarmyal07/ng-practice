import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableSubjectComponent } from './observable-subject.component';

describe('ObservableSubjectComponent', () => {
  let component: ObservableSubjectComponent;
  let fixture: ComponentFixture<ObservableSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableSubjectComponent]
    });
    fixture = TestBed.createComponent(ObservableSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
