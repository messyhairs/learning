import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Es2019Component } from './es2019.component';

describe('Es2019Component', () => {
  let component: Es2019Component;
  let fixture: ComponentFixture<Es2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Es2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Es2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
