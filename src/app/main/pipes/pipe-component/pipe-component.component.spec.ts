import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeComponentComponent } from './pipe-component.component';

describe('PipeComponentComponent', () => {
  let component: PipeComponentComponent;
  let fixture: ComponentFixture<PipeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipeComponentComponent]
    });
    fixture = TestBed.createComponent(PipeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
