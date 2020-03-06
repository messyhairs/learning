import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventemitterchildComponent } from './eventemitterchild.component';

describe('EventemitterchildComponent', () => {
  let component: EventemitterchildComponent;
  let fixture: ComponentFixture<EventemitterchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventemitterchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventemitterchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
