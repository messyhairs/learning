import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrooceeryComponent } from './grooceery.component';

describe('GrooceeryComponent', () => {
  let component: GrooceeryComponent;
  let fixture: ComponentFixture<GrooceeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrooceeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrooceeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
