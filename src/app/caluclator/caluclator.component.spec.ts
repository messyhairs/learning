import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaluclatorComponent } from './caluclator.component';

describe('CaluclatorComponent', () => {
  let component: CaluclatorComponent;
  let fixture: ComponentFixture<CaluclatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaluclatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaluclatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
