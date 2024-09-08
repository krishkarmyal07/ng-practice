import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBehaviourReplayComponent } from './subject-behaviour-replay.component';

describe('SubjectBehaviourReplayComponent', () => {
  let component: SubjectBehaviourReplayComponent;
  let fixture: ComponentFixture<SubjectBehaviourReplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectBehaviourReplayComponent]
    });
    fixture = TestBed.createComponent(SubjectBehaviourReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
