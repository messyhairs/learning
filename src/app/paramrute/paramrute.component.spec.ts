import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamruteComponent } from './paramrute.component';

describe('ParamruteComponent', () => {
  let component: ParamruteComponent;
  let fixture: ComponentFixture<ParamruteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamruteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamruteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
