import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjscompoComponent } from './rxjscompo.component';

describe('RxjscompoComponent', () => {
  let component: RxjscompoComponent;
  let fixture: ComponentFixture<RxjscompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjscompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjscompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
