import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqryxamplesComponent } from './jqryxamples.component';

describe('JqryxamplesComponent', () => {
  let component: JqryxamplesComponent;
  let fixture: ComponentFixture<JqryxamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqryxamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqryxamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
