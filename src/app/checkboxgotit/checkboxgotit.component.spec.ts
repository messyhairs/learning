import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxgotitComponent } from './checkboxgotit.component';

describe('CheckboxgotitComponent', () => {
  let component: CheckboxgotitComponent;
  let fixture: ComponentFixture<CheckboxgotitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxgotitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxgotitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
