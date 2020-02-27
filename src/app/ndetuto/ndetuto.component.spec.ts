import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdetutoComponent } from './ndetuto.component';

describe('NdetutoComponent', () => {
  let component: NdetutoComponent;
  let fixture: ComponentFixture<NdetutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdetutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdetutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
