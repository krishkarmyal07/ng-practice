import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorOninitComponent } from './constructor-oninit.component';

describe('ConstructorOninitComponent', () => {
  let component: ConstructorOninitComponent;
  let fixture: ComponentFixture<ConstructorOninitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstructorOninitComponent]
    });
    fixture = TestBed.createComponent(ConstructorOninitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
